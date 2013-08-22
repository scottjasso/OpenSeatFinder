Use this tool to poll for open seats in a class and alert you when a seat is available.

This must be run with chrome with flags:
--allow-file-access-from-files --disable-web-security
To do this, just create a shortcut to chrome on your desktop, right click -> properties, and in the target field add those two flags right after the path.
You must close all chrome windows, then open that shortcut, then you can open test.html

Edit test.js to change 'classname' to the course you want to join (e.g., "cs 4911").
Once an open class is found, an alert will pop up and a youtube video will start playing.
The open class's CRN is written to the web page. 

Currently, this tool does not look for waitlist positions, only open seats.