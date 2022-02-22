function IsValidEmail(strEmail){

    result = true;

    atPosition = strEmail.indexOf("@", 0);

    if(atPosition == -1 || atPosition < 1){

        result = false;
    }

    atPosition2 = strEmail.indexOf("@",(atPosition + 1));

    if (atPosition2 > -1){

        result = false;

    }

    return result;
}