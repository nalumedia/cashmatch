
// prices per square foot
var price_sqft = new Array();
price_sqft["basic"]=3;
price_sqft["standard"]=4;
price_sqft["premium"]=8;


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
how_much["Accessories"]=.5;

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

// Get $ / SqFt based on stagign type
function getPriceSqft()
    {
        var priceSqft=0;
        var theForm = document.forms["calculator"];
        var selectedType= theForm.elements["stagingtype"];
        // loop through options
        for(var i = 0; i < selectedType.length; i++)
        {
            if(selectedType[i].checked)
            {
                priceSqft = price_sqft[selectedType[i].value];
                break;
            }
        }
        return priceSqft;
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

// get price for how mush is being staged
function getHowMuch()
{
    var howmuchPrice=0;
    var theForm = document.forms["calculator"];
    var selectedHow = theForm.elements["howmuch"];
    howmuchPrice = how_much[selectedHow.value];
    return howmuchPrice;
}

// calculate total price and update options selected
function calculateTotal()
{   
    // calculate total price
    var stagingPrice =  getPriceSqft() * getQuantity() * getStylePrice() * getHowMuch();
    // update options selected 
    document.getElementById('totalPrice').innerHTML = "$"+stagingPrice.toLocaleString('en-US');

    if (stagingPrice > 0) {
        document.getElementById('results_left').innerHTML = `<img src="https://athomestyling.s3-us-west-2.amazonaws.com/home.png"> `;
        }
        // TODO get conditional working 
}

// replace square footage
function updateSqFt() {
    document.getElementById('squarefeet').innerHTML = "&#9989; "+getQuantity().toLocaleString('en-US');
}

//replace staging type
function updateType() {
    document.getElementById('selectedstagingtype').innerHTML = "&#9989; $"+getPriceSqft()+" / SqFt";
}

//replace style type
function updateStyle() {
    document.getElementById('selectedstyle').innerHTML = "&#9989; Style Multiplier "+getStylePrice();
}

//replace how much
function updateMuch() {
    document.getElementById('selectedhowmuch').innerHTML = "&#9989; How Much "+getHowMuch();
}



// send email with options selcted on submit
function sendEmail()
{
    window.open('mailto:ryan@nalumedia.com');
    window.open('mailto:ryan@nalumedia.com?subject=Staging+Estimate&body=stagingPrice');
}

