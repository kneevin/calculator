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
  subgraph ide4[Operator Conditions]
    displayIsNull[display value == NULL]
    displayNotNull[display value != NULL] --> displayPassed
  end
  subgraph ide5[Equals Conditions]
  
  end

  nullifyDisplay --> display
  nullifyEval --> eval
  clear -->|pressed| init
  displayNotNull --> nullifyDisplay
  operPassed -->|"displayValueStr + operStr"| eval
  operPassed -->|"operStr"| lastOper
  oper -->|pressed: passes oper. | ide4
	numeric -->|pressed: passes num. | update
  equals --> |pressed| ide5
```
