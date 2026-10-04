import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume-test')

def lambda_handler(event, context):
    # Get the current view count
    response = table.get_item(Key={'id': '1'})
    views = response['Item']['views']

    # Increment the view count
    views += 1

    # Update the view count back to DynamoDB
    table.put_item(Item={'id': '1', 'views': views})

    # Convert views to int before returning
    return {
        'statusCode': 200,
        'body': json.dumps({'views': int(views)})  # Convert to int for JSON serialization
    }
