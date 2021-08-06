---
sidebar_position: 3
---


# API from Python

## How to execute Alteryx workflows with Python

Note, the code used in this example is modified fromTheamazingdp.This should work on you Mac (or a linux environment) with python3 installed. Check if that's the case:

```python
python3 --version
```

This should return something like:

```Python 3.6.0```

To execute an Alteryx workflow with Python, we need to have 2 dependencies installed. First, the "Requests" library (to make API calls) and a custom script that is used to create a simple wrapper for these API calls ("AlteryxGalleryAPI").

To install the requests library:

```python
pip3 install requests
```

And to install the AlteryxGalleryAPI script, you can either download the repository here, or execute the following python script (Note that we want to have the github repo downloaded in a folder called "AlteryxGalleryAPI", which is located in the same folder as where we will place our Python scripts.)

```python
from urllib.request
import urlopen from zipfile
import ZipFile
import os


url = 'https://github.com/Lindsen13/AlteryxGalleryAPI/archive/master.zip'
payload = urlopen(url)

tempzip = open("tempfile.zip", "wb")
tempzip.write(payload.read())
tempzip.close()

zf = ZipFile("tempfile.zip")
zf.extractall()
zf.close()

os.rename('AlteryxGalleryAPI-master', 'AlteryxGalleryAPI')

```

Executing the above script can be done by saving it as "install.py", and run:

```python
python3 install.py
```

This should create a folder called "AlteryxGalleryAPI". Now we have everything to make our calls to the Alteryx Gallery:

```python
from AlteryxGalleryAPI import AlteryxGalleryAPI

client_key = 'YOUR_CLIENT_KEY'
client_secret = 'YOUR_SECRET_KEY'
gallery_url = 'YOUR_GALLERY_URL' #'https://alteryx.inviso.dk/gallery/api/v1' 
appID = 'YOU_APP_ID' #'5fbb794671285113d42fcc9f'

con = AlteryxGalleryAPI.Gallery(gallery_url, client_key, client_secret)
output = con.execute_workflow(appID)

if output[0].status_code == 200: 
    print(f"workflow executed correctly at {output[1].get('createDate')}")
    job_result = con.get_job_status(job_id=output[1].get('id'))
    print(job_result)
    
```

With this, you've executed a workflow, and afterwards fetched its results!