### Method Overriding in Java

If subclass (child class) has the same method as declared in the parent class, it is known as **method overriding in Java.** In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as **method overriding**.

### Rules for Java Method Overriding
-	The method must have the same name as in the parent class
-	The method must have the same parameter as in the parent class.
-	There must be an IS-A relationship (inheritance).
	
### A real example of Java Method Overriding

Consider a scenario where Bank is a class that provides functionality to get the rate of interest. However, the rate of interest varies according to banks. For example, SBI, ICICI and AXIS banks could provide 8%, 7%, and 9% rate of interest.
```sh
	class Bank{  
	int getRateOfInterest(){return 0;}  
	}  
	//Creating child classes.  
	class SBI extends Bank{  
	int getRateOfInterest(){return 8;}  
	}  
	class ICICI extends Bank{  
int getRateOfInterest(){return 7;}  
}  
class AXIS extends Bank{  
int getRateOfInterest(){return 9;}  
}  
//Test class to create objects and call the methods  
class Test2{  
public static void main(String args[]){  
SBI s=new SBI();  
ICICI i=new ICICI();  
AXIS a=new AXIS();  
System.out.println("SBI Rate of Interest: "+s.getRateOfInterest());  
System.out.println("ICICI Rate of Interest: "+i.getRateOfInterest());  
System.out.println("AXIS Rate of Interest: "+a.getRateOfInterest());}}  

```


```sh
Output:
SBI Rate of Interest: 8
ICICI Rate of Interest: 7
AXIS Rate of Interest: 9

```
