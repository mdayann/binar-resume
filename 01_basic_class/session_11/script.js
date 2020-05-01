class eMoneyAccount {
  constructor(nameInit, phoneInit) {
    this.name = nameInit;
    this.phone = phoneInit;
    this.amount = 0;
  }

  topUp(value) {
    this.amount += value;
  }

  spend(value) {
    this.amount -= value;
  }

  transfer(recipient, value) {
    recipient.amount += value;
    this.amount -= value;
  }

  setName(newName) {
    this.name = newName;
  }

  setPhone(newPhone) {
    this.phone = newPhone;
  }
}

const dayanAccount = new eMoneyAccount('Dayan', '085786');
const testAccount = new eMoneyAccount('Test', '085786');

const buttonAmount = document.getElementById('btAmount');
const buttontopUp = document.getElementById('btTopUp');
const buttonSpend = document.getElementById('btSpend');
const buttonTransfer = document.getElementById('btTransfer');

//Check Amount

buttonAmount.addEventListener('click', () => {
  const areaAmount = document.getElementById('areaAmount');
  const showResult = document.createElement('p');
  areaAmount.appendChild(showResult);
  showResult.innerHTML = `Rp. ${dayanAccount.amount}`;
});

//Method Top Up

buttontopUp.addEventListener('click', () => {
  const topUpInput = parseInt(document.getElementById('inTopUp').value, 10);

  if (typeof topUpInput !== 'number') {
    alert('Top up Failed');
    console.log('Top Up Failed');
    console.log(`Current Ammount : ${dayanAccount.amount}`);
  } else if (topUpInput < 10000) {
    alert('Top up Failed, Minimal Top up is 10000');
    console.log('Minimal Top up is 10000');
  } else {
    dayanAccount.topUp(topUpInput);
    alert('Top up Succes');
    alert(`Top Up Amount : ${topUpInput}`);
    console.log(`Top Up Ammount : ${topUpInput}`);
    console.log(`Current Ammount : ${dayanAccount.amount}`);
    const areaTopUp = document.getElementById('areaTopUp');
    const hasilTopUp = document.createElement('p');
    hasilTopUp.innerHTML = `Rp. + ${topUpInput}`;
    areaTopUp.appendChild(hasilTopUp);
  }
});

//Method Spend

buttonSpend.addEventListener('click', () => {
  const spendInput = parseInt(document.getElementById('inSpend').value, 10);

  if (typeof spendInput !== 'number') {
    alert('Spend Failed');
    console.log('Spend Failed');
    console.log(`Current Ammount : ${dayanAccount.amount}`);
  } else if (spendInput > dayanAccount.amount) {
    alert('Spend Failed');
    alert('Amount is Insufficient');
    console.log('Amount is Insufficient');
  } else {
    dayanAccount.spend(spendInput);
    alert('Spend Succes');
    alert(`Spend Amount : ${spendInput}`);
    console.log(`Spend Ammount : ${spendInput}`);
    console.log(`Current Ammount : ${dayanAccount.amount}`);
    const areaSpend = document.getElementById('areaSpend');
    const hasilSpend = document.createElement('p');
    hasilSpend.innerHTML = `Rp. - ${spendInput}`;
    areaSpend.appendChild(hasilSpend);
  }
});

buttonTransfer.addEventListener('click', () => {
  const transferInput = parseInt(
    document.getElementById('inTransfer').value,
    10
  );
  const repTransfer = document.getElementById('repTransfer').value;

  var repConvert = eval(repTransfer);
  console.log(typeof repConvert);

  if (typeof transferInput !== 'number') {
    alert('Transfer Failed');
    console.log('Transfer Failed');
  } else if (transferInput > dayanAccount.amount) {
    alert('Transfer Failed, Amount is Insufficient');
    console.log('Amount is Insufficient');
  } else if (repConvert instanceof eMoneyAccount === false) {
    alert('Transfer Failed, Recipient is not registered');
  } else {
    dayanAccount.transfer(repConvert, transferInput);
    alert(`Succes, Transfer Amount : ${transferInput}`);
    const areaTransfer = document.getElementById('areaTransfer');
    const hasilTransfer = document.createElement('p');
    hasilTransfer.innerHTML = `Rp. - ${transferInput}`;
    areaTransfer.appendChild(hasilTransfer);
  }
});
