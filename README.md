# calculator overview

This project is assigned by The Odin Project and will do the following:

- User can interact with an interface that has numbers [0, 9]
  - There are operations such as:
    - Addition (+)
    - Subtraction (-)
    - Multiplication (x)
    - Division (/)
- The user can perform operations on numbers that they use. A typical interaction is as follows:
  - User presses 9
  - Interface displays 9 at the top
  - User presses \*
  - User presses 9
  - Interface displays 81 at the top
  - User presses -
  - User presses 8
  - Interface displays 74
  - User presses 9
  - Interface displays 9

# PSEUDOCODE: planning & user loop
The evaluation array is the most important thing here, it's: [ (1st number), (operator), (2nd number) ]
User interface does the following:
  - Listens for 1st number pressed
    - Once pressed, it will keep appending to the first number until an operator is pressed
  - Once an operator is pressed, it will append the entire first number to the array, then appends the operator to the 2nd element
  - Then, it listens for more numbers, doing the appending
  - Then, an operator is pressed, it will join the evaluation array into a string, evaluate it, set that to the 1st number of the array, then append the operator to the 2nd element
  - Then continue this loop

```mermaid
flowchart LR
  subgraph ide1["while input == numeric"]
    numeric["Numbers [0, 9]"]
  end
  numeric --> ele1[("1st Element")]
```

# OLD LOOP (incomplete)

```mermaid
flowchart LR
init(("Interface (re)initializes")) --> nullifyDisplay
init --> nullifyEval
	subgraph ide1[Buttons]
		numeric["Numbers [0, 9]"]
    clear["AC (clear)"]
		oper["Operators (* / + -)"]
    equals["Equals (=)"]
	end
	subgraph ide2["Evaluation / Display"]
    lastOper[(Last Operator)]
    display[(displayValueStr)]
    displayPassed{Display value is appended} -->
    operPassed{Operator is appended}
		eval[(Eval string)]
	end
  subgraph ide3[Communicating Functions]
		update{Adds to front of display value} --> display
		error{Error is displayed} --> nullifyDisplay{Sets display value to NULL}
    nullifyEval{Sets eval string to NULL}
	end
  subgraph ide4[Conditions]
    displayNotNull[display value != NULL] --> displayPassed
    lastOperNotNull[lastOper != NULL]
  end

  nullifyDisplay --> display
  nullifyEval --> eval
  clear -->|pressed| init
  displayNotNull --> nullifyDisplay
  operPassed -->|"displayValueStr + operStr"| eval
  operPassed -->|"operStr"| lastOper
  oper -->|pressed: passes oper. | displayNotNull
	numeric -->|pressed: passes num. | update
  equals --> |pressed| lastOperNotNull
```
