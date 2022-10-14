import os
import json

def main():
    json_file_path = os.path.dirname(os.path.abspath(__file__)) +"/data.json"
    with open(json_file_path,"r") as json_file:
        data = json.load(json_file)
        print(data["1-18"]["schritt a"]["ThemenBereiche"][0]["unterbereiche"][len(data["1-18"]["schritt a"]["ThemenBereiche"][0]["unterbereiche"])-1]["inhalt"])
        print(data["1-18"]["schritt a"]["ThemenBereiche"][0]["unterbereiche"][len(data["1-18"]["schritt a"]["ThemenBereiche"][0]["unterbereiche"])-1]["beschreibung"])
        print(data["19-36"]["schritt f"]["ThemenBereiche"][0]["unterbereiche"][len(data["19-36"]["schritt f"]["ThemenBereiche"][0]["unterbereiche"])-1]["beschreibung"])
        print(data["19-36"]["schritt f"]["ThemenBereiche"][0]["wochen"])
    return

if __name__ == "__main__":
    main()
