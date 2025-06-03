accounts = []
check = []

function account_balance(let balance){
	let amount = 0.0;
	amount = amount + balance;
	accounts.append(amount);
	check.append(balance);
	console.log("your current balance is: ", amount);
	return amount;
	}
	
function withdrawal(let withdraw);
	let price = accounts[0];
	if(withdraw > price){
		let message = "Not enough balance"
		console.log(message);
	}

	let checker = accounts[0];
	checker = checker * 0.90;
	
	if(withdraw > checker){
		message = "can't withdraw more than 90% of your balance at once";
		console.log(message);
	}else{
		let bal = accounts[0] - withdraw;
		console.log("Transaction succesful");
		console.log("withdrawal amount: ", withdraw);
		let charges = 100;
		bal = bal - charges;
		console.log("withdrawal fee:", charges);
		console.log("remaining balance:", bal);
		accounts[0] = bal;
		check.append(withdraw);
	}

function transactions(){
	console.log("This are the list of your transactions");
	console.log(check);
	return check;
}



boolean hi = true;
while(true){
	let message = '''
welcome to my bank app
press 1 to deposit
press 2 to withdraw
press 3 Transactions
press 0 to exit
	'''
	console.log(message);
	let userchoice = Number(prompt());
	switch(userchoice):

		case 1:
	
			let message = '''
choose a number
press 1 to deposit
press 0 to go back
				'''
			console.log(message);
			
			let choice1 = Number(prompt());
			switch(choice1):
				
				case 1:
					let message = '''
Enter amount
					'''
					console.log(message);
					let user_amount = Number(prompt());
					account_balance(user_amount);

				case _:
					console.log("invalid input");
		case 2:
			while(true){
				let message = '''
press amount to withdraw in multiple of 500 or 1000

press 1 for 500
press 2 for 1000
press 0 to exit
				'''
				console.log(message);
				let choice1 = Number(prompt());
				switch(choice1):
			
					case 1:
						let message = '''
press 1 for 5000
press 2 for 10000
press 3 for 15000
press 4 for 20000
						'''
						console.log(message);
						let choice1 = Number(prompt());
						switch(choice1):
							case 1:
								five_thousand = 5000.0;
								withdrawal(five_thousand);
							case 2:
								ten_thousand = 10000.0;
								withdrawal(ten_thousand);
							case 3:
								fifteen_thousand = 15000.0;
								withdrawal(fifteen_thousand);
							case 4:
								twenty_thousand = 20000.0;
								withdrawal(twenty_thousand);

							case _:
								console.log("Invalid amount");




					case 2:
						let message = '''
press 1 for 5000
press 2 for 10000
press 3 for 15000
press 4 for 20000	
						'''
						console.log(message);
						choice1 = int(input());
						switch(choice1):
							case 1:
								five_thousand = 5000.0;
								withdrawal(five_thousand);
							case 2:
								ten_thousand = 10000.0;
								withdrawal(ten_thousand):
							case 3:
								fifteen_thousand = 15000.0;
								withdrawal(fifteen_thousand);
							case 4:
								twenty_thousand = 20000.0;
								withdrawal(twenty_thousand);
							case _:
								console.log("Invalid amount");

					case 0: 
						break;

					case _:
						console.log("Invalid input");
}

		case 3:
			transactions();


		case 0:
			hi = false;
		case _:
			console.log("invalid input");
	}
	
	
