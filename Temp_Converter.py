def temp_conv(fr, to, temp):
    if fr == "C" and to == "F":
        print ("Temprature is ", temp*(9/5) + 32, " F")

    elif fr == "F" and to == "C":
        print ("Temprature is ", (temp-32)*(5/9), " C")

    elif fr == "K" and to == "C":
        print ("Temprature is ", temp-273.15, " C")

    elif fr == "C" and to == "K":
        print ("Temprature is ", temp+273.15, " K")

    else:
        print ("Invalid input")

temp_conv("C", "K", 6000)