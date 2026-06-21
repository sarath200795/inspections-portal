export const config = {
  "title": "Inspections Portal",
  "tagline": "Build custom inspection checklists, schedule them, capture photo evidence and auto-score Pass/Fail.",
  "org": "Northwind Industrial",
  "port": 5173,
  "walkthrough": [
    {
      "route": "/app/dashboard",
      "title": "Inspections dashboard",
      "sub": "Forms, scheduled inspections and pass/fail breakdown."
    },
    {
      "route": "/app/forms/new",
      "title": "Build an inspection form",
      "sub": "Add questions (Pass/Fail, Text, Number, Choice), set photo rules, or bulk-import from Excel."
    },
    {
      "route": "/app/forms",
      "title": "Form library",
      "sub": "All inspection templates; publish, assign to dates, or edit."
    },
    {
      "route": "/app/schedule",
      "title": "Schedule",
      "sub": "A month calendar of due inspections and completed records."
    },
    {
      "route": "/app/records",
      "title": "Records",
      "sub": "Searchable history of completed inspections with responses, scores and photos."
    }
  ],
  "closing": {
    "route": "/app/dashboard",
    "title": "Inspections Portal — checklists that hold people to standard.",
    "sub": "Start by registering your organization."
  }
}
