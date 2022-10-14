import os
import json
import mysql.connector
import re

global val
val = []
global global_id
global_id = 0

def appendNewVal(data: json, lengthIn: str, step: str, shortStep: str):
    global global_id
    for x in data[lengthIn][step]["ThemenBereiche"]:
        subTopic = x["name"]
        shorting = (global_id,lengthIn,getid(data[lengthIn][step]["Thema"],subTopic),data[lengthIn][step]["Thema"],subTopic)
        val.append(shorting)
        global_id += 1
        print(shorting)
    return

def getid(todes: str, suto: str):
    val_ = [todes, suto]
    mydb = mysql.connector.connect(
      host="localhost",
      user="lukas",
      password="none",
      database="main"
    )

    mycursor = mydb.cursor(buffered=True)

    sql = "SELECT id FROM topic WHERE topicDescription = %s AND subTopic = %s"
    mycursor.execute(sql,(todes,suto))
    mydb.commit()
    #print(str(mycursor.fetchall()).split('\'')[1])
    return str(mycursor.fetchall()).split('\'')[1]

def appendVal(data: json, lengthIn: str, step: str, shortStep: str):
    global global_id
    for x in data[lengthIn][step]["ThemenBereiche"]:
        length_         = lengthIn
        topic_          = data[lengthIn][step]["Thema"]
        childTopic_     = x["name"]
        weeks_          = x["wochen"]
        part_   	    = x["nummer"]
        for i in x["unterbereiche"]: 
            inhalt_ = i["inhalt"] 
            beschreibung_ = i["beschreibung"] 
            #id length, topicID, content, description
            shorting = (global_id, length_, getid(data[lengthIn][step]["Thema"],x["name"]),inhalt_, beschreibung_)
            val.append(shorting)
            global_id += 1
            print(shorting)
    return

def main():
    mydb = mysql.connector.connect(
      host="localhost",
      user="lukas",
      password="none",
      database="main"
    )

    mycursor = mydb.cursor()

    sql = "INSERT INTO ability (id, length, topicId, content, description) VALUES (%s, %s, %s, %s, %s)"
    json_file_path = os.path.dirname(os.path.abspath(__file__)) +"/data.json"
    with open(json_file_path,"r") as json_file:
        data = json.load(json_file)

        appendVal(data, "1-18", "schritt a", "a")
        appendVal(data, "1-18", "schritt b", "b")
        appendVal(data, "1-18", "schritt f", "f")
        appendVal(data, "19-36", "schritt a", "a")
        appendVal(data, "19-36", "schritt b", "b")
        appendVal(data, "19-36", "schritt f", "f")

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")
    return

if __name__ == "__main__":
    main()

#get all the data from the .json file and add it to the mysql data base