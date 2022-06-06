---
id: card-tricks
title: Card tricks
---

## Si Stebbins stack

[[\*](https://www.youtube.com/watch?v=TdTFweigAF4), [\*](https://www.youtube.com/watch?v=6b_Pl7HhdJk)]

The **Si Stebbins stack** is a cyclic mathematical card stack in which each card alternates suit in the **CHaSeD order** (Clubs Hearts Spades Diamonds), and has a numerical value **three** greater than the preceding card (A&clubs;, 4&hearts;, 7&spades;, 10&diams;, K&clubs; ... 8&spades;, J&diams;).

Since the bottom card of the deck is in order with the top card making an endlessly repeating cycle, it can be cut (not shuffled) any number of times without disturbing the order.

The following mathematical formula can be used to determine the value and suit of a card at any position in a Si Stebbins deck.

- Value of $n$th card $(V_{n}) = (V_{b}+3n)\mod13$
- Suit of $n$th card $(S_{n}) = (S_{b}+n)\mod4$

Where,

- $V_{b} =$ Value of bottom card,
- $S_{b} =$ Suit of bottom card (1 for Clubs, 2 for Hearts, 3 for Spades, 0 for Diamonds)

The position of a card with suit $S_{n}$ and value $V_{n}$ is given by:

$$
n = 13(S_{n}-5) - 4(V_{n}-V_{b})\mod52
$$

## Fitch Cheney's Five Card Trick

### Effect

This is 2 person trick. A spectator chooses 5 random cards from a shuffled deck. Person A (the "assistant") shuffles the 5 cards in a seemingly random order, flips 1 of them down, and hands over the 4 face up cards to Person B (the "mind reader"). Person B succesfully tells what the face down card is.

### Method

From the [pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle), it follows that at least 2 out of the 5 chosen cards must have the **same** suit. The assistant chooses the "larger" one to be the hidden card and flips it down. The "smaller" one becomes the first card in the collection of 4 cards that person B gets. Person B looks at this card to determine the suit of the hidden card.

The rule that determines the "larger" card is as follows: imagine the 13 cards of a particular suit like the hours in a clock with 13 numbers (Ace = 1, Jack = 11, Queen = 12, King = 13). Any 2 numbers in this clock ([cyclic order](https://en.wikipedia.org/wiki/Cyclic_order)) are at most 6 steps apart, for example, 7 is 6 steps ahead of 1, 1 is 5 steps ahead of 9, and so on. The larger card is the one that comes second in this sense. For example, we should assume 2&hearts; is larger than 10&hearts;.

In other words, if the difference between the ranks is $\gt 6$, the "larger" card is the one with the smaller rank.

![13 clock](/img/excalidraw/13-cyclic-order.svg)

To convey the rank of the hidden card, the assistant uses the 3 remaining cards by ordering them in one of $3! = 6$ ways indicating the hidden card is that many steps ahead of the first card. The order is determined by the **CHaSeD rule** (Clubs Hearts Spades Diamonds).

\*L = Low, M = Middle, H = High

- LMH -> +1
- LHM -> +2
- MLH -> +3
- MHL -> +4
- HLM -> +5
- HML -> +6

### Example

Suppose the spectator chooses 3&spades;, 7&clubs;, 7&diams;, Q&spades; and 3&hearts;.

1. Repeating suit is &spades;.
2. 3&spades; is 4 steps ahead of Q&spades;. 3&spades; becomes the hidden card. Q&spades; becomes the first card.
3. To denote the number 4, the remaining cards must be ordered in MHL format.
4. Person A hands over the cards to Person B in this order: Q&spades;, 7&clubs;, 7&diams;, 3&hearts;

## Water and wine

[[\*](https://www.youtube.com/watch?v=aqKkwTKWWUQ), [\*](https://www.youtube.com/watch?v=99R7UiJAg6w)]

### Effect

From a randomly shuffled deck of cards, 20 of them face-up and 32 face-down, the spectator hands out 20 randomly chosen cards to the magician and keeps the rest to themselves. The performer then (without seeing the cards) rearranges their own cards so that the number of face-up cards they hold matches the number of face-up cards the spectator has.

### Method

The "rearrangement" is done simply by flipping the deck of cards the performer has. Since this is a self-working trick, it can even be done blindfolded to prevent counting or tracking.

## Whispering Jokers

[[\*](https://www.youtube.com/watch?v=vKxFzSwcOhY)]

- Take a deck of cards and put two jokers J1 and J2 at positions 10 and 29 respectively.
- Cut the deck about 1/3rd of the way down. The bottom card is the chosen card X. Cut the remaining deck half-way down. The bottom card is the chosen card Y.<br />
  In other words, cut the deck at points X and Y such that 10 < X < Y < 29. Separate the deck into 3 piles (1 through X, X+1 through Y, and Y+1 through 54).
- Put `Pile1` on top of `Pile3`, then put `Pile2` on top of the rest.
- Split and remove the jokers. Separate the deck into 3 piles.
- Put `Pile3` on top of `Pile2` and then `Pile1` on top of the rest.
- The 18th and the 43rd cards from the top of this deck will be the chosen cards X and Y respectively.

## Misc

- [Kruskal Count](https://en.wikipedia.org/wiki/Martin_David_Kruskal#Kruskal_Count) [[\*](https://www.youtube.com/watch?v=yeJD98Zrmu4), [\*](https://www.singingbanana.com/Kruskal.pdf)]
- [Trick deck](https://en.wikipedia.org/wiki/Trick_deck)
  - Marked deck [[\*](https://www.youtube.com/watch?v=L8GsxU6Zt0E)]
- [False shuffles](https://en.wikipedia.org/wiki/Shuffling#Faking)
- [False cuts](<https://en.wikipedia.org/wiki/Cut_(cards)#False_cut>)
- [Numbery Card Trick - Numberphile](https://www.youtube.com/watch?v=dHzUQnRjbuM)
- [Magic 13 - Vsauce](https://www.youtube.com/watch?v=rUW_i5ucA9g)
