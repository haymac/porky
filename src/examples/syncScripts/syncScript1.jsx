﻿//#include ../bin/porky.jsx;// Libraries should already be loaded by the calling script// Where's the database located? Here it is...var thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var pathToDatabase = unescape(thisParentFolder.parent.toString().replace("~", thisRootFolder));// Global data source connection objectsettings.dataSource.type = "SQLite";settings.dataSource.server = "-";settings.dataSource.name = pathToDatabase + "/database.sqlite";settings.dataSource.username = "-";settings.dataSource.password = "-";alert("Looking for a SQLite database here:\n\n" + settings.dataSource.name);function syncWithMe(){    alert("Global object 'settings.sync.identifier' set\nfrom xml element's attribute: " + settings.sync.identifier);    var mySyncResult1 = "";    mySyncResult1 = connectToDataSource("SELECT * FROM MyOtherTable WHERE rowid='" + settings.sync.identifier + "'");    mySyncResult1 = json_parse(mySyncResult1);    mySyncResult1 = mySyncResult1[0].ClientComplimentText;    return mySyncResult1;}syncWithMe();