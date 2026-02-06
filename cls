[33mcommit f37b8a9814c82e3dd5cb4c001ae76d1426740cb0[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: FullstackDevelopment <ankitkr756208@gmail.com>
Date:   Fri Nov 7 14:42:09 2025 +0530

    changes html

[1mdiff --git a/HTML/register.html b/HTML/register.html[m
[1mnew file mode 100644[m
[1mindex 0000000..7fcead7[m
[1m--- /dev/null[m
[1m+++ b/HTML/register.html[m
[36m@@ -0,0 +1,41 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html>[m
[32m+[m[32m<head>[m
[32m+[m[32m    <title>Registration</title>[m
[32m+[m[32m    <link rel="stylesheet" href="style.css">[m
[32m+[m[32m</head>[m
[32m+[m[32m<body class="main-frame-body">[m
[32m+[m[32m    <h2>Registration Form</h2>[m
[32m+[m[32m    <form name="registrationForm" class="form-layout" onsubmit="return validateForm()">[m
[32m+[m[32m        Name: <input type="text" name="name"><br><br>[m
[32m+[m[32m        Password: <input type="password" name="password"><br><br>[m
[32m+[m[32m        E-mail ID: <input type="text" name="email"><br><br>[m
[32m+[m[32m        Phone Number: <input type="text" name="phone"><br><br>[m
[32m+[m[32m        Sex:[m
[32m+[m[32m        <input type="radio" name="sex" value="male"> Male[m
[32m+[m[32m        <input type="radio" name="sex" value="female"> Female[m
[32m+[m[32m        <br><br>[m
[32m+[m[32m        Date of Birth:[m
[32m+[m[32m        <select name="day">[m
[32m+[m[32m            <option>Day</option>[m
[32m+[m[32m            </select>[m
[32m+[m[32m        <select name="month">[m
[32m+[m[32m            <option>Month</option>[m
[32m+[m[32m            </select>[m
[32m+[m[32m        <select name="year">[m
[32m+[m[32m            <option>Year</option>[m
[32m+[m[32m            </select>[m
[32m+[m[32m        <br><br>[m
[32m+[m[32m        Languages Known:[m
[32m+[m[32m        <input type="checkbox" name="lang" value="english"> English[m
[32m+[m[32m        <input type="checkbox" name="lang" value="telugu"> Telugu[m
[32m+[m[32m        <input type="checkbox" name="lang" value="hindi"> Hindi[m
[32m+[m[32m        <input type="checkbox" name="lang" value="tamil"> Tamil[m
[32m+[m[32m        <br><br>[m
[32m+[m[32m        Address: <textarea name="address" rows="4" cols="30"></textarea><br><br>[m
[32m+[m[32m        <input type="submit" value="Submit">[m
[32m+[m[32m    </form>[m
[32m+[m[41m    [m
[32m+[m[32m    <script src="validation.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
