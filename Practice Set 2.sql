{
    "type": "MySQLNotebook",
    "version": "1.0",
    "caption": "DB Notebook 5",
    "content": "CREATE DATABASE IF NOT EXISTS sql_practice_pack;\r\nUSE sql_practice_pack;\r\n\r\nCREATE TABLE IF NOT EXISTS food_orders (\r\n order_id INT PRIMARY KEY,\r\n restaurant VARCHAR(100),\r\n city VARCHAR(50),\r\n food_type VARCHAR(50),\r\n order_amount DECIMAL(10,2),\r\n delivery_partner VARCHAR(50),\r\n order_date DATE\r\n);\r\n\r\nINSERT IGNORE INTO food_orders VALUES\r\n(101, 'Spice Hub', 'Hyderabad', 'Indian', 850, 'Ravi', '2026-09-01'),\r\n(102, 'Burger Zone', 'Hyderabad', 'Fast Food', 520, 'Kiran', '2026-09-01'),\r\n(103, 'Pizza Point', 'Mumbai', 'Fast Food', 1100, 'Ravi', '2026-09-02'),\r\n(104, 'Curry House', 'Bangalore', 'Indian', 760, 'Aman', '2026-09-02'),\r\n(105, 'Spice Hub', 'Hyderabad', 'Indian', 1250, 'Kiran', '2026-09-03'),\r\n(106, 'Sushi World', 'Mumbai', 'Japanese', 1800, 'Aman', '2026-09-03'),\r\n(107, 'Pizza Point', 'Mumbai', 'Fast Food', 900, 'Ravi', '2026-09-04'),\r\n(108, 'Curry House', 'Bangalore', 'Indian', 640, 'Kiran', '2026-09-04'),\r\n(109, 'Burger Zone', 'Hyderabad', 'Fast Food', 430, 'Aman', '2026-09-05'),\r\n(110, 'Sushi World', 'Mumbai', 'Japanese', 2100, 'Ravi', '2026-09-05'),\r\n(111, 'Spice Hub', 'Hyderabad', 'Indian', 950, 'Aman', '2026-09-06'),\r\n(112, 'Curry House', 'Bangalore', 'Indian', 880, 'Ravi', '2026-09-06');\r\nSELECT COUNT(*) FROM food_orders;\r\nSELECT SUM(order_amount) FROM food_orders;\r\nSELECT AVG(order_amount) FROM food_orders;\r\nSELECT MAX(order_amount) FROM food_orders;\r\nSELECT MIN(order_amount) FROM food_orders;\r\nSELECT city, SUM(order_amount) FROM food_orders GROUP BY city;\r\nSELECT restaurant, COUNT(*) FROM food_orders GROUP BY restaurant;\r\nSELECT food_type, AVG(order_amount) FROM food_orders GROUP BY food_type;\r\nSELECT delivery_partner, SUM(order_amount) FROM food_orders GROUP BY delivery_partner;\r\nSELECT city, COUNT(*) FROM food_orders GROUP BY city HAVING COUNT(*) > 3;\r\nSELECT restaurant, SUM(order_amount) FROM food_orders GROUP BY restaurant HAVING SUM(order_amount) > 2000;\r\nSELECT delivery_partner, AVG(order_amount) FROM food_orders GROUP BY delivery_partner HAVING AVG(order_amount) > 800;\r\nSELECT food_type, SUM(order_amount) FROM food_orders GROUP BY food_type HAVING SUM(order_amount) > 2500;\r\nSELECT city, SUM(order_amount) FROM food_orders GROUP BY city ORDER BY SUM(order_amount) DESC;\r\nSELECT restaurant, SUM(order_amount) FROM food_orders GROUP BY restaurant ORDER BY SUM(order_amount) DESC LIMIT 1;\r\n\r\n",
    "options": {
        "tabSize": 4,
        "insertSpaces": true,
        "indentSize": 4,
        "defaultEOL": "CRLF",
        "trimAutoWhitespace": true
    },
    "viewState": {
        "cursorState": [
            {
                "inSelectionMode": false,
                "selectionStart": {
                    "lineNumber": 43,
                    "column": 1
                },
                "position": {
                    "lineNumber": 43,
                    "column": 1
                }
            }
        ],
        "viewState": {
            "scrollLeft": 0,
            "firstPosition": {
                "lineNumber": 12,
                "column": 1
            },
            "firstPositionDeltaTop": -15
        },
        "contributionsState": {
            "editor.contrib.folding": {},
            "editor.contrib.wordHighlighter": false
        }
    },
    "contexts": [
        {
            "state": {
                "start": 1,
                "end": 42,
                "language": "mysql",
                "result": {
                    "type": "text",
                    "text": [
                        {
                            "type": 0,
                            "index": 0,
                            "content": "MySQL Error (1064): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'USE sql_practice_pack;\n\nCREATE TABLE IF NOT EXISTS food_orders (\n order_id INT P' at line 2",
                            "language": "ansi"
                        }
                    ],
                    "executionInfo": {
                        "text": ""
                    }
                },
                "currentHeight": 96.796875,
                "currentSet": 1,
                "statements": [
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 0,
                            "length": 2307
                        },
                        "contentStart": 0,
                        "state": 0
                    }
                ]
            },
            "data": []
        },
        {
            "state": {
                "start": 43,
                "end": 43,
                "language": "mysql",
                "currentSet": 1,
                "statements": [
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 0,
                            "length": 0
                        },
                        "contentStart": 0,
                        "state": 0
                    }
                ]
            },
            "data": []
        }
    ]
}