# Oracle Databases


Connecting to oracle databases is a pain in the ass. There are many blogs online about how to do it, which all seem to offer different options. Below is how we connected to oracle at Devoteam FR, and hopefully you can copy the process for your own.

## Devoteam FR

This is how we have done it at Devoteam FR. 

1. Download instant client (Version 19.8.0.0.0 Basic Package) from [here](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html)
2. Unzip into a single directory, e.g. C:\oracle\instantclient_19_8
3. Add the directory to the PATH environment variable
    * This PC > System properties > System info > Advanced system settings > Environment variables
    * In the System variables list, select ‘Path’ > Edit > New > Browse 
    * Choose the directory C:\oracle\instantclient_19_8
4. Download and install Microsoft Visual Studio 2017 Redistributable from [here](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) (note: do this for the x86 and x64 versions)
5. Restart the pc
6. In C:\oracle\instantclient_19_8, create a sub-folder called network and a sub-sub-folder called admin
7. In notepad, copy+paste the following and save as tnsnames.ora in the admin folder
```
DTEAEBSPRD =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = dteaebsprd.opc.oracleoutsourcing.com)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SERVICE_NAME = PDTE2I)
    )
  )
```
8. Create a new workflow in alteryx and add an input tool
9. Go to Data Sources and choose Oracle Quick connect
10. You should see a database connection window, which needs to be filled as follows
    * Connection Name: DTEAEBSPRD
    * Host: dteaebsprd.opc.oracleoutsourcing.com 
    * Service Name: PDTE2I
    * User Names: see Lastpass
    * Password: see Lastpass
11. Click Test and you should get a Connection Successful! Message
12. Next time you want to connect, go to Data connections > Saved and you should see the connection there


