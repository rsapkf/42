---
id: mathemagics
title: Mathemagics
---

## Doomsday rule

- [Determination of the day of the week - Wikipedia](https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week)
- [Doomsday rule - Wikipedia](https://en.wikipedia.org/wiki/Doomsday_rule)
- [Numberphile video](https://www.youtube.com/watch?v=z2x3SSBVGJU)

The Doomsday rule is an algorithm devised by **John Conway** to quickly calculate the weekday of any date in history. The algorithm works on the following principle:

> There is a set of dates (called **doomsdays**), that for any year, fall on the same weekday (called the **anchor day of the year**).

Using the anchor, we can find out the weekday for any date using simple arithmetic.

The doomsdays we need to remember in order to use the algorithm are:

| MM/DD                       | Full date                             | Mnemonic               |
| --------------------------- | ------------------------------------- | ---------------------- |
| 1/3 (1/4 for leap years)    | Jan 3 / Jan 4                         | -                      |
| 2/28 (2/29 for leap years)  | Feb 28 / Feb 29                       | -                      |
| 3/14                        | Mar 14                                | Pi day                 |
| 4/4, 6/6, 8/8, 10/10, 12/12 | April 4, Jun 6, Aug 8, Oct 10, Dec 12 | Even months except Feb |
| 5/9, 9/5, 7/11, 11/7        | May 9, Sept 5, Jul 11, Nov 7          | 9-to-5 at 7-11         |

Other memorable doomsdays are **Jul 4** (Independence day), **Oct 31** (Halloween) and **Dec 26** (Boxing day).

In total, there are 52 doomsdays in a year. In leap years, the doomsdays in the month of January and February are shifted by one day. However, the total remains the same.

The algorithm involves the following steps.

1. Find the **anchor day for the century** (required for step 2).
2. Find the **anchor day for the year**. All doomsdays fall on this anchor day.
3. Count forward/backward from the **nearest doomsday** to the specified date.

For calculations, we assign an index for each weekday. Starting from Monday (1) to Sunday (7), the index equals $rank\mod 7$.

| Day       | Index | Mnemonic   |
| --------- | ----- | ---------- |
| Monday    | 1     | One-day    |
| Tuesday   | 2     | Twos-day   |
| Wednesday | 3     | Threes-day |
| Thursday  | 4     | Fours-day  |
| Friday    | 5     | Five-day   |
| Saturday  | 6     | Sixtur-day |
| Sunday    | 0     | None-day   |

:::info Example

**Jul 27, 1987**

1. Anchor day for the century (1900s) = 3 (**Wednesday**)
2. Anchor day for the year (1987) = 6 (**Saturday**)
3. Nearest doomsday to Jul 27 is **Jul 11** = **Saturday** (from step 2).

   **July 25** = **July 11+7+7** = **Saturday**

   **July 27** = **Monday**.

:::info

### Finding the anchor day for the century

Given a year $y$,

Let $c$ = the first 2 digits of the year (or $\left\lfloor\frac{y}{100}\right\rfloor$)

#### Method 1

Anchor = $5\times(c\mod 4)\mod 7$ + Tuesday

#### Method 2

| Value of $c\mod 4$ | Anchor    |
| ------------------ | --------- |
| 0                  | Tuesday   |
| 1                  | Sunday    |
| 2                  | Friday    |
| 3                  | Wednesday |

:::info Example:

**1700-1799**

$17\mod 4 = 1 \implies$ **Sunday**

Or

$5\times(17\mod 4)\mod 7$ + Tuesday = $5$ + Tuesday = **Sunday**

:::

The following table lists the anchor days for 1500s to 2600s:

| Century             | Anchor day (Index) |
| ------------------- | ------------------ |
| 1500s, 1900s, 2300s | Wednesday (3)      |
| 1600s, 2000s, 2400s | Tuesday (2)        |
| 1700s, 2100s, 2500s | Sunday (0)         |
| 1800s, 2200s, 2600s | Friday (5)         |

Mnemonics for recent centuries:

- 1900s: **We-in-dis-day** (most living people were born in that century)
- 2000s: **Twos-day** or **Y-Tue-K**

### Finding the anchor day for the year

Given a year $XXYY$,

#### Method 1

Let $a$ = Anchor day of the century

$b = \left\lfloor\frac{YY}{12}\right\rfloor$

$c = YY\mod 12$

$d = \left\lfloor\frac{c}{4}\right\rfloor$

Anchor day of the year = $(a+b+c+d)\mod 7$

#### Method 2

Anchor = $\left(YY+\left\lfloor\frac{YY}{4}\right\rfloor\right)\mod 7$

#### Method 3: The "odd+11" method

1. Let $t = YY$
2. If $t$ is odd, add $11$.
3. $t = \frac{t}{2}$
4. If $t$ is odd, add $11$.
5. $t = 7-(t\mod 7)$
6. Count forward $t$ days from the **century's anchor day** to get the year's anchor day.

:::note
Each common year advances the anchor day by one day. Each leap year advances it by two days.
:::

:::info Example

**1987**

$a = 3$

$b = \left\lfloor\frac{87}{12}\right\rfloor = 7$

$c = 87\mod 12 = 3$

$d = \left\lfloor\frac{3}{4}\right\rfloor = 0$

Anchor = $(3+7+3+0)\mod 7 = 13\mod 7 = 6$ (**Saturday**)

It can be useful to use your index, middle, and ring fingers and the pinkie to store the values for $a$, $b$, $c$, and $d$ respectively during mental calculations.

Or using "odd+11" method:

$87$ -> $98$ -> $49$ -> $60$ -> $7-(60\mod 7)$ = $7-4$ = $3$ -> Wednesday + 3 = **Saturday**
:::

## Magic squares

To create a 4x4 magic square that adds upto p, let c = p - 33 and then replace the value of c in the following square:

|     |     |     |     |
| --- | --- | --- | --- |
| 14  | c   | 12  | 7   |
| 11  | 8   | 13  | c+1 |
| 5   | 10  | c+2 | 16  |
| c+3 | 15  | 6   | 9   |

## Rapid cube root

This trick relies on the fact that the cubes of single digit whole numbers end in unique digits.

$$
0^3 = 0
$$

$$
1^3 = 1
$$

$$
2^3 = 8
$$

$$
3^3 = 27
$$

$$
4^3 = 64
$$

$$
5^3 = 125
$$

$$
6^3 = 216
$$

$$
7^3 = 343
$$

$$
8^3 = 512
$$

$$
9^3 = 729
$$

Example: Cube root of 389017 (AAABBC) = 73

Steps:

1. Cube just lower than AAA (389) = 343 = 7^3
2. Cube ending in C (7) = 27 = 3^3

## Divisibility rules

| Number | Test                                                                             | Examples                              |
| ------ | -------------------------------------------------------------------------------- | ------------------------------------- |
| 2      | The last digit is even                                                           | 0, 2, 4                               |
| 3      | The sum of digits is divisible by 3                                              | 357: 3+5+7 = 15/3 = 5                 |
| 4      | The last 2 digits form number that is divisible by 4                             | 732: 32/4 = 8                         |
| 5      | Ends in 0 or 5                                                                   | 7330, 85                              |
| 6      | Is divisible by 2 and 3                                                          | 72                                    |
| 7      | The alternating sum of blocks of three from right to left gives a multiple of 7  | 1,369,851: 851−369+1 = 483 = 7\*69    |
| 8      | The last three digits form a number that is divisible by 8                       | 28,152: 152 = 8\*19                   |
| 9      | The sum of the digits form a number that is divisible by 9                       | 2880: 2+8+8+0=18 = 2\*9               |
| 10     | The ones digit is 0                                                              | 270, 50                               |
| 11     | The alternating sum of the digits is divisible by 11                             | 918,082: 9−1+8−0+8−2 = 22 = 2\*11     |
| 12     | Is divisible by 3 and 4                                                          | 336                                   |
| 13     | The alternating sum of blocks of three from right to left gives a multiple of 13 | 2,911,272: 272-911+2 = -637 = 13\*-49 |
| 14     | Is divisible by 2 and 7                                                          | 238                                   |
| 15     | Is divisible by 3 and 5                                                          | 415                                   |

## Fibonacci series hidden in ordinary division

If you divide 1 by 999,999,999,999,999,999,999,998,999,999,999,999,999,999,999,999, you get this curious result:

```
0.
000000000000000000000000 000000000000000000000001 000000000000000000000001 000000000000000000000002
000000000000000000000003 000000000000000000000005 000000000000000000000008 000000000000000000000013
000000000000000000000021 000000000000000000000034 000000000000000000000055 000000000000000000000089
000000000000000000000144 000000000000000000000233 000000000000000000000377 000000000000000000000610
000000000000000000000987 000000000000000000001597 000000000000000000002584 000000000000000000004181
000000000000000000006765 000000000000000000010946 000000000000000000017711 000000000000000000028657
000000000000000000046368 000000000000000000075025 000000000000000000121393 000000000000000000196418
000000000000000000317811 000000000000000000514229 000000000000000000832040 000000000000000001346269
000000000000000002178309 000000000000000003524578 000000000000000005702887 000000000000000009227465
000000000000000014930352 000000000000000024157817 000000000000000039088169 000000000000000063245986
000000000000000102334155 000000000000000165580141 000000000000000267914296 000000000000000433494437
000000000000000701408733 000000000000001134903170 000000000000001836311903 000000000000002971215073
000000000000004807526976 000000000000007778742049 000000000000012586269025 000000000000020365011074
000000000000032951280099 000000000000053316291173 000000000000086267571272 000000000000139583862445
000000000000225851433717 000000000000365435296162 000000000000591286729879 000000000000956722026041
000000000001548008755920 000000000002504730781961 000000000004052739537881 000000000006557470319842
000000000010610209857723 000000000017167680177565 000000000027777890035288 000000000044945570212853
000000000072723460248141 000000000117669030460994 000000000190392490709135 000000000308061521170129
000000000498454011879264 000000000806515533049393 000000001304969544928657 000000002111485077978050
000000003416454622906707 000000005527939700884757 000000008944394323791464 000000014472334024676221
000000023416728348467685 000000037889062373143906 000000061305790721611591 000000099194853094755497
000000160500643816367088 000000259695496911122585 000000420196140727489673 000000679891637638612258
000001100087778366101931 000001779979416004714189 000002880067194370816120 000004660046610375530309
000007540113804746346429 000012200160415121876738 000019740274219868223167 000031940434634990099905
000051680708854858323072 000083621143489848422977 000135301852344706746049 000218922995834555169026
000354224848179261915075 000573147844013817084101 000927372692193078999176 001500520536206896083277
002427893228399975082453 003928413764606871165730 006356306993006846248183 010284720757613717413913
016641027750620563662096 026925748508234281076009 043566776258854844738105 070492524767089125814114
114059301025943970552219 184551825793033096366333 298611126818977066918552 483162952612010163284885
```

## Misc

- Sum of 10 consecutive fibonacci numbers is always equal to the 7th term in the series times 11.<br />
  Example: 15 + 20 + 35 + 55 + 90 + 145 + <u>235</u> + 380 + 615 + 995 = <u>235</u> \* 11 = 2585
- [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) [[\*](https://www.youtube.com/watch?v=TVq2ivVpZgQ)]
- [Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture) / Hailstone sequence / 3n + 1 problem
- [Look-and-say sequence](https://en.wikipedia.org/wiki/Look-and-say_sequence): 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...
- [Belphegor's Prime](https://en.wikipedia.org/wiki/Belphegor%27s_prime): 1000000000000066600000000000001
- [Seldon prime](https://math.dartmouth.edu/~carlp/sheldon02132019.pdf)
- ["I don't know the numbers": a math puzzle](https://alexanderell.is/posts/numbers-game/)
- Trinity Hall prime [[\*](https://www.youtube.com/watch?v=fQQ8IiTWHhg), [\*](https://www.futilitycloset.com/2020/01/12/more-prime-images/), [\*](http://www.gef.free.fr/oulipo34.html#date060120)]
