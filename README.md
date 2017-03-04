# Date/UNIX Timestamp API Project 
Returns date and UNIX timestamp in JSON.

## User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:
<code>
https://nameless-escarpment-99341.herokuapp.com/December%2015,%202015

https://nameless-escarpment-99341.herokuapp.com/December 15, 2015

https://nameless-escarpment-99341.herokuapp.com/1450137600
</code>

## Example output:
<code>
{ "unix": 1450137600, "natural": "December 15, 2015" }
</code>
