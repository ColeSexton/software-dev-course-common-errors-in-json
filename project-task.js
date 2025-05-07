/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", //added a comma
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", //added quotations to name
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,   //changed undefined to null, invalid data type
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] //removed comma after parking(extra comma)
  }
}
`;

/* This is what I pasted into JSON lint and it came out JSON is Valid`
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", 
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,   
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] 
  }
}
`
*/

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

    Nothing came up wrong when I used the linter I was able to spot all the errors myself.
    The linter just said "JSON is valid".


*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I looked through each line of the JSON to try and identify errors. I did this a couple times 
until I found all of them

2️⃣ How did you confirm that your corrected JSON file was valid?

I copied the JSON into JSON linter and check it there. It confirmed it was valid.

3️⃣ Which errors were the most difficult to spot? Why?

The commas in incorrect places or missing were the hardest for me just becuase they
are small and blend in or I think they are there when they are not.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   I think just using VS code in a JSON file is helpful becuase it automatically
   highlights the errors. Then double checking it by looking it over. Then triple checking
   it in the JSON linter. 
   
*/
