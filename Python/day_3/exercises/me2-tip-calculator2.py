total_amount = float(input("How much was the total of the bill?\n"))
# service_level = input("level of service? Type good, fair, bad?\n")
tip_amount = 0


while tip_amount == 0:
    service_level = input("level of service? Type good, fair, bad?\n")
    if service_level == "good":
        tip_amount = float(total_amount * .20)
    elif service_level == "fair":
        tip_amount = float(total_amount * .15)
    elif service_level == "bad":
        tip_amount = float(total_amount * .10)
    print(tip_amount)
print(f"tip amount is ${tip_amount}")
final_total = tip_amount + total_amount
print(f"Your total bill is {final_total}")
