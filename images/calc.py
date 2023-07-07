while True:
    print ("1 = Addition")
    print ("2 = Subtraction")
    print ("3 = Multiplication")
    print ("4 = Division")
    print ("5 = Exit program")
    num = int(input("Enter number : "))
    if num == 1:
        print ("Addition")
        first = int(input("Enter first number :"))
        second = int(input("Enter second number :"))
        result = first + second
        print (" ")
        print (first," + ",second," = ",result)
        print (" ")
    elif num == 2:
        print ("Subtraction")
        first = int(input("Enter first number :"))
        second = int(input("Enter second number :"))
        result = first - second
        print (first," - ",second," = ",result)
    elif num == 3:
        print ("Division")
        first = int(input("Enter first number :"))
        second = int(input("Enter second number :"))
        result = first / second
        print (first," : ",second," = ",result)
    elif num == 4:
        print ("Multiplication")
        first = int(input("Enter first number :"))
        second = int(input("Enter second number :"))
        result = first * second
        print (first," x ",second," = ",result)
    elif num == 5:
        print ("Quit!")
        running = False