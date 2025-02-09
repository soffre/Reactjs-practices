export const WINNING_COMBINATIONS = [
    // Horizontal wins
    [
        { row: 0, column: 0 }, 
        { row: 0, column: 1 }, 
        { row: 0, column: 2 }
    ],
    [
        { row: 1, column: 0 }, 
        { row: 1, column: 1 }, 
        { row: 1, column: 2 }
    ],
    [
        { row: 2, column: 0 }, 
        { row: 2, column: 1 }, 
        { row: 2, column: 2 }
    ],

    // Vertical wins
    [
        { row: 0, column: 0 }, 
        { row: 1, column: 0 }, 
        { row: 2, column: 0 }
    ],
    [
        { row: 0, column: 1 }, 
        { row: 1, column: 1 }, 
        { row: 2, column: 1 }
    ],
    [
        { row: 0, column: 2 }, 
        { row: 1, column: 2 }, 
        { row: 2, column: 2 }
    ],

    // Diagonal wins
    [
        { row: 0, column: 0 }, 
        { row: 1, column: 1 }, 
        { row: 2, column: 2 }
    ],
    [
        { row: 0, column: 2 }, 
        { row: 1, column: 1 }, 
        { row: 2, column: 0 }
    ]
];


