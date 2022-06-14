function displayForm()
{  
    var fname=document.contactus.fname.value;
    var lname=document.contactus.lname.value;
    var name=fname+lname;
    var email=document.contactus.email.value;
    var address=document.contactus.address.value;
    var phone=document.contactus.phone.value;
    let flag=true;

    if (name==null || name=="")
    {
        flag=false;
        alert("Name is invalid");
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        flag=false;
        alert("Email is invalid");
    }
    if (phone.length<10)
    {
        flag=false;
        alert("Phone no. is invalid");
    }
    if (address==null || address=="")
    {
        flag=false;
        alert("Address is invalid");
    }
    if(flag)
    {
        alert("Form submitted succesfully!\nName:"+name+"\n"+"Email:"+email+"\n"+"Phone:"+phone+"\n"+"Address:"+address);
    }
}