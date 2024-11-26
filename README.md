# Window-And-TabSwitchDetection
This simple Window and Tab Switching Detection project been created as part of AI exam proctoring project, in which, it will detect window Switching and the tab switching during the online exam if the user tries to switch it.

And also the exam site will be closed if the user tried to switch it from exam site to another site or to an another window more than 10 times.

The totalViolationCount tracks both tab switches and window switches, Violations are incremented for either event.
The user is alerted whether the violation was due to a tab switch or window switch and the remaining chances are displayed dynamically.

# Behaviour of this site:
Tab Switching: Detected using the visibilitychange event.
Window Switching: Detected using the blur and focus events.
If the total violations (tab + window switches) exceed the limit, the site closes.

# Execution
Run it in code editor by clicking run button as default or try run it by typing this following command: 'start index.html' on your command prompt after switching into the according file directory.
