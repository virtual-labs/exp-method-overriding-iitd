## Post Test

Q1. What is the output of the below Java program with method overriding?<br>

```
class Cat
{
  int jumpingHeight(int weight)
  {
    System.out.println(10);
    return 10;
  }
}
class WildCat extends Cat
{
  void jumpingHeight(int weight)
  {
    System.out.println("20");
  }
}
public class MethodOverriding3
{
  public static void main(String[] args)
  {
    WildCat wc = new WildCat();
    wc.jumpingHeight(30);
  }
}
```
A 10<br>
B 20<br>
C 30<br>
**D Compilation error**<br>

Q2. What is the output of the below Java program with method overriding?<br>

```
class Steel
{
  void setGrade(int g)
  {
    System.out.print(",GRADE="+g);
  }
}
class CarbonSteel extends Steel
{
  void setGrade(char grade)
  {
    System.out.print(",Grade="+grade);
  }
}
public class MethodOverriding5
{
  public static void main(String[] args)
  {
    Steel s = new CarbonSteel();
    s.setGrade(5);
    s.setGrade('A');
  }
}
```
A  ,GRADE=5,GRADE=A<br>
**B ,GRADE=5,GRADE=65**<br>
C ,Grade=5,Grade=65<br>
D Compiler error<br>

Q3. What is the output of the below Java program with method overriding?<br>

```
class Amplifier
{
  void addGain(int a)
  {
    System.out.println((a + 10)+"dB");
  }
}
class DigitalAmplifier extends Amplifier
{
  void addGain(int a)
  {
    super.addGain(a+5);
  }
}
public class MethodOverriding7
{
  public static void main(String[] args)
  {
    DigitalAmplifier da = new DigitalAmplifier();
    da.addGain(12);
  }
}
```
A 22dB<br>
**B 27dB**<br>
C 22dB 27dB<br>
D Compiler error<br>

Q4. Which polymorphism concept is applied to inheritance relationship in java programming?<br>
A Method overloading<br>
B Constructor overloading<br>
**C Method overriding**<br>
D None<br>

Q5. If the method signature of a Superclass and the method signature of a Subclass are the same, then the subclass method is said to be _____ the superclass's method.<br>
**A Overriding**<br>
B Overloading<br>
C None<br>
