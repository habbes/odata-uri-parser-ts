grammar ODataUriPath;

path: '/' segment segmentList;
segmentList: '/' segment segmentList | ;
segment: identifier | NUMBER;
identifier: ID;
ID: [a-zA-Z]+;
NUMBER: [0-9]+;


