---
sidebar_position: 4
---


# API from Powershell

## How to execute Alteryx workflows with Powershell

All you will need to change are the 4 parameters at the top


```jsx
# Set User parameters:
$ServerURL = "https://alteryx.inviso.dk/gallery/api/v1"
$WorkflowID = "xxxxxxxxxxxxxx"
$ConsumerKey = "xxxxxxxxxxxxx"
$ConsumerSecret = "xxxxxxxxxxxxx"

# Set Additional parameters:
$OauthMethod = "POST"
$OauthUrl = "$ServerURL/workflows/$WorkflowID/jobs/"
$Nonce = -join ((48..57) + (97..122) | Get-Random -Count 6 | % {[char]$_})
$Timestamp = [int64](([datetime]::UtcNow)-(get-date "1/1/1970")).TotalSeconds
$Timestamp
[regex]$regex='(%[a-f0-9]{2})'
$question = "?"
$headers = @{
'Content-Type' = 'application/json'
}

# Build Base String:
$params = "oauth_consumer_key=$ConsumerKey&oauth_nonce=$Nonce&oauth_signature_method=HMAC-SHA1&oauth_timestamp=$Timestamp&oauth_version=1.0"
$paramsEncoded = $regex.Replace([System.Web.HttpUtility]::UrlEncode($params), {$args[0].Value.ToUpper()})
$URLEncoded = $regex.Replace([System.Web.HttpUtility]::UrlEncode($OauthUrl), {$args[0].Value.ToUpper()})
$basestring = "$OauthMethod&$URLEncoded&$paramsEncoded"

# Create Signature:
$hmacsha = New-Object System.Security.Cryptography.HMACSHA1
$hmacsha.key = [Text.Encoding]::ASCII.GetBytes("$ConsumerSecret&")
$signature = $hmacsha.ComputeHash([Text.Encoding]::ASCII.GetBytes($basestring))
$signature = [Convert]::ToBase64String($signature)
$signatureEncoded =  $regex.Replace([System.Web.HttpUtility]::UrlEncode($signature), {$args[0].Value.ToUpper()})
$full_url = "$OauthUrl$question$params&oauth_signature=$signatureEncoded";

# Call API:
Invoke-RestMethod -Method $OauthMethod -Uri $full_url -Headers $headers -Body "{}"
```