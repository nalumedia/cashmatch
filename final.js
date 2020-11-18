
// prices per square foot
var price_sqft = new Array();
price_sqft["Basic"]=3;
price_sqft["Standard"]=4;
price_sqft["Premium"]=8;


// prices per style
var style_prices= new Array();
style_prices["None"]=0;
style_prices["Contemporary"]=1.5;
style_prices["Modern"]=1;
style_prices["Transitional"]=2;
style_prices["Other"]=1;

// prices per how much is being staged
var how_much= new Array();
how_much["Full"]=2;
how_much["Partial"]=1;
how_much["Accessories Only"]=.5;

// get Square Footage
function getQuantity()
{
    var theForm = document.forms["calculator"];
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    // check if SqFt is blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}

function getPriceSqft()
{
    var priceSqft=0;
    var theForm = document.forms["calculator"];
    var selectedType = theForm.elements["stagingtype"];
    priceSqft = price_sqft[selectedType.value];
    return priceSqft;
}

function typeName()
{
    var theForm = document.forms["calculator"];
    var selectedType = theForm.elements["stagingtype"];
    typename = selectedType.value;
    return typename;
}

// get price per style
function getStylePrice()
    {
        var stylePrice=0;
        var theForm = document.forms["calculator"];
        var selectedStyle = theForm.elements["style"];
        selectedStylePrice = style_prices[selectedStyle.value];
        return selectedStylePrice;
    }

// get style name
function getStyleName()
    {
        var theForm = document.forms["calculator"];
        var selectedStyle = theForm.elements["style"];
        var selectedStyleName = selectedStyle.value;
        console.log(selectedStyle.value);
        return selectedStyleName;
    }

// get price for how mush is being staged
function getHowMuch()
{
    var howmuchPrice=0;
    var theForm = document.forms["calculator"];
    var selectedHow = theForm.elements["howmuch"];
    howmuchPrice = how_much[selectedHow.value];
    return howmuchPrice;
}

function getHowMuchName()
{
    var theForm = document.forms["calculator"];
    var selectedHow = theForm.elements["howmuch"];
    howmuchName = selectedHow.value;
    return howmuchName;
}


// calculate total price and update options selected
function calculateTotal()
{   
    // calculate total price
    var stagingPrice =  getPriceSqft() * getQuantity() * getStylePrice() * getHowMuch();
    var monthlyRental = .15 * stagingPrice;
    var securityDeposit = .1 * stagingPrice;
    var total = stagingPrice + monthlyRental + securityDeposit; 

    if (stagingPrice > 0) {
        document.getElementById('totalPrice').innerHTML = "Initial Staging Fee $"+stagingPrice.toLocaleString('en-US');
        document.getElementById('monthlyRental').innerHTML = "Monthly Rental $"+monthlyRental.toLocaleString('en-US');
        document.getElementById('securityDeposit').innerHTML = "Security Deposit $"+securityDeposit.toLocaleString('en-US');
        document.getElementById('total').innerHTML = "Total $"+total.toLocaleString('en-US');
        document.getElementById('button').innerHTML = '<button type="button" class="button" onclick="sendEmail()">Get My Quote</button>';
        document.getElementById('hr').innerHTML = '<hr>';
        document.getElementById('welcome').innerHTML = 'Your Staging Quote:';
        

        // document.getElementById('results_left').innerHTML = `<img src="https://athomestyling.s3-us-west-2.amazonaws.com/home.png"> `;
        }
        // TODO get conditional working 
}

// replace square footage
function updateSqFt() {
    document.getElementById('squarefeet').innerHTML = "&#9989; "+getQuantity().toLocaleString('en-US')+" Square Feet";
}

//replace staging type
function updateType() {
    document.getElementById('selectedstagingtype').innerHTML = "&#9989; "+typeName()+" Staging";
}

//replace style type
function updateStyle() {
    document.getElementById('selectedstyle').innerHTML = "&#9989; " + getStyleName()+" Style";
}

//replace how much
function updateMuch() {
    document.getElementById('selectedhowmuch').innerHTML = "&#9989; "+getHowMuchName()+" Staging";
}

// send email with options selcted on submit
function sendEmail()
{
    window.open('mailto:ryan@nalumedia.com');
    window.open('mailto:ryan@nalumedia.com?subject=Staging+Estimate&body=stagingPrice');
}

