from bobae import update_cyber_db as update_Bobe_cyber_db
from bobae import update_korean_db as update_Bobe_korean_db
from bobae import update_foreign_db as update_Bobe_foreign_db
from save import save_to_file

DB = []


def Bobe_db_update():
    Bobe_cyber_db = update_Bobe_cyber_db()
    Bobe_korean_db = update_Bobe_korean_db()
    Bobe_foreign_db = update_Bobe_foreign_db()
    DB.append({"serachSite": "보배드림", "DB": Bobe_cyber_db +
               Bobe_korean_db + Bobe_foreign_db})


def start():
    Bobe_db_update()
    print("DB updating is done!")
    # save_to_file(DB)
    return DB


start()
