### Method Overriding in Java

- Overriding is a feature that allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its super-classes or parent classes. 
- When a method in a subclass has the same name, same parameters or signature, and same return type(or sub-type) as a method in its super-class, then the method in the subclass is said to override the method in the super-class.
- Method overriding is one of the way by which java achieve Run Time Polymorphism.

---

### Usage of Java Method Overriding
- Method overriding is used to provide the specific implementation of a method which is already provided by its superclass.
- Method overriding is used for runtime polymorphism.

---

### Rules for Java Method Overriding
-	The method must have the same name as in the parent class.
-	The method must have the same parameter as in the parent class.
-	There must be an IS-A relationship (inheritance).

---

### Understanding the problem without method overriding
Let's understand the problem that we may face in the program if we don't use method overriding.

```
//Java Program to demonstrate why we need method overriding  
//Here, we are calling the method of parent class with child class object.  
//Creating a parent class  
class Vehicle
{  
  void run()
  {
  System.out.println("Vehicle is running");
  }  
}  

//Creating a child class  
class Bike extends Vehicle
{  
  public static void main(String args[])
  {  
  //creating an instance of child class  
  Bike obj = new Bike();  
  //calling the method with child class instance  
  obj.run();  
  }  
}  
```
Problem is that I have to provide a specific implementation of run() method in subclass that is why we use method overriding.

#### OUTPUT
```
Vehicle is running
```
---

### Example of method overriding
In this example, we have defined the run method in the subclass as defined in the parent class but it has some specific implementation. The name and parameter of the method are the same, and there is IS-A relationship between the classes, so there is method overriding
```
//Java Program to illustrate the use of Java Method Overriding  
//Creating a parent class.  
class Vehicle
{  
  //defining a method  
  void run()
  {
  System.out.println("Vehicle is running");
  }  
}  
//Creating a child class  
class Bike2 extends Vehicle
{  
  //defining the same method as in the parent class  
  void run()
  {
  System.out.println("Bike is running safely");
  }  
  
  public static void main(String args[])
  {  
  Bike2 obj = new Bike2();//creating object  
  obj.run();//calling method  
  }  
}  
```
#### OUTPUT

```
Bike is running safely
```
---

### Real life example of method overriding
Lets consider an example that, A Son inherits his Father’s public properties e.g. home and car and using it. 
At later point of time, he decided to buy and use his own car, but, still he wants to use his father’s home. So, what he can do?
He can use method overriding feature and use his own car.  See below example, how he has overridden his own car method.

```
class Father
 {
public void home()
{
System.out.println("Father's home");
}
public void car()
{
System.out.println("Father's Car");
}	
}

class Son extends Father
{
	
//Override
public void car()
{
System.out.println("Son's Car");		
}	
}

public class TestOverriding 
{
public static void main(String[] args) 
{
Son s = new Son();
s.home();
s.car();
}
}
```

#### OUTPUT
```
Father’s home
Son’s Car
```












