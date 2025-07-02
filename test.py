# name  = input('please enter your name ').strip().capitalize()
# age = input('please enter your age ').strip()
# email = input('please enter your email ').strip()
# password = input('please enter your password ').strip()
# print(f"hello {name} yor email is {email}, your age is {age} and your password is {password}")
# email = input('please enter your email ').strip()
# print(f"email user is {email.split('@')[0] } , email service is {email.split('@')[1]}")

# name = "mohamed ".strip()

# print(f"hello {name}" if name == "mohamed" else "bye")

# numberOfTry = 5
# num = 0
# password = "Mohamed@202017"
# while num <numberOfTry:
#     passwordInput = input("please enter your password ").strip()
#     if passwordInput == password:
#         print("welcome") 
#         break
#     elif num == numberOfTry -1:
#         print('you are not allowed to try again ,the number of try is 5')
#         break
#     else:
#         print("wrong password , please try again")
#     num +=1
# names = []
# skiles = []
# while len(names) < 5:
#     enterNames = input("please enter your name ").strip()
#     enterSkile = input("please enter your skile ").strip()
#     names.append(enterNames) 
#     skiles.append(enterSkile)

# for name in names :
#     print(f"name is {name} :")
#     for skile in skiles:
#         print(f"skiles is : [{skile},]")
# objectSkiles = {
#     "mohamed":["python","java","php"],
#     "ahmed":["nodejs","java","php"],
# }
# for name  in objectSkiles:
#     print(f"name is {name} :")
#     for skile in objectSkiles[name]:
#         print(f"skiles is : [{skile},]")