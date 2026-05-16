// import { useState } from "react";
const { useState } = React;
const plan = {
  overview: {
    title: "Master Design, Animation, Vision AI & Quantum",
    subtitle: "World-Class Accelerated Curriculum",
    totalWeeks: 20,
    dailyHours: "8–10 hours/day",
    philosophy: "This plan compresses years of world-class curriculum into an accelerated program by eliminating overlap, sequencing skills intelligently, and using only the best resources on the planet. Every day builds on the last. You will graduate with expertise in Graphic Design, 2D Animation, VFX, 3D Animation, Computer Vision with Python, and Quantum Computing."
  },
  phases: [
    {
      id: 1,
      phase: "Phase 1",
      title: "Computer Science & Software Engineering",
      color: "#3A86FF",
      accent: "#74B3FF",
      duration: "Weeks 1–6",
      weeks: [
        {
          week: 1,
          title: "Computer Science Fundamentals & DSA",
          days: [
            {
              day: 1,
              title: "How Computers Work: Bits to OS",
              hours: "9h",
              topics: [
                "Binary and hexadecimal: bits, bytes, nibbles, conversions",
                "Boolean algebra: AND, OR, NOT, XOR, NAND gates",
                "CPU architecture: ALU, registers, clock cycle, fetch-decode-execute",
                "Memory hierarchy: registers, L1/L2/L3 cache, RAM, SSD, HDD",
                "Operating system fundamentals: kernel, processes, threads, scheduling",
                "How the internet works: TCP/IP, DNS, HTTP, packets, routing"
              ],
              resources: [
                { name: "CS50x – Harvard (Free, World's Best Intro CS Course)", url: "https://cs50.harvard.edu/x/", type: "Free" },
                { name: "Crash Course Computer Science – YouTube (40 Episodes)", url: "https://www.youtube.com/@CrashCourse", type: "Free" },
                { name: "Code: The Hidden Language – Petzold (Book)", url: "https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319", type: "Book" }
              ],
              project: "Convert 20 numbers between binary, hex, decimal. Draw and label a complete fetch-decode-execute diagram."
            },
            {
              day: 2,
              title: "Data Structures: Arrays, Linked Lists, Stacks, Queues",
              hours: "10h",
              topics: [
                "Arrays: fixed size, O(1) access, O(n) insert/delete",
                "Dynamic arrays: amortized O(1) append — how ArrayList/vector works",
                "Linked lists: singly, doubly, circular — nodes and pointers",
                "Stacks: LIFO — push, pop, peek — the call stack in programs",
                "Queues: FIFO — enqueue, dequeue — BFS applications",
                "Deques, priority queues, circular buffers"
              ],
              resources: [
                { name: "VisuAlgo – Visualize Data Structures & Algorithms", url: "https://visualgo.net/", type: "Free" },
                { name: "GeeksforGeeks – Data Structures", url: "https://www.geeksforgeeks.org/data-structures/", type: "Free" },
                { name: "CS50x – Week 5 Data Structures", url: "https://cs50.harvard.edu/x/", type: "Free" }
              ],
              project: "Implement a stack and queue from scratch in Python. Use stack to check balanced brackets in source code."
            },
            {
              day: 3,
              title: "Data Structures: Trees, Graphs, Hash Tables",
              hours: "10h",
              topics: [
                "Binary trees: nodes, root, leaf, height, depth traversals (in/pre/post order)",
                "Binary search trees (BST): insert, search, delete — O(log n)",
                "AVL trees and Red-Black trees: self-balancing concepts",
                "Heaps: min-heap, max-heap — O(log n) insert/extract — heapify",
                "Hash tables: hash functions, collisions, chaining, open addressing — O(1) avg",
                "Graphs: directed, undirected, weighted — adjacency list vs matrix"
              ],
              resources: [
                { name: "MIT 6.006 – Introduction to Algorithms (Free OCW)", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/", type: "Free" },
                { name: "YouTube: Abdul Bari – Data Structures Playlist", url: "https://www.youtube.com/@abdul_bari", type: "Free" }
              ],
              project: "Build a full BST with insert, search, delete, and all three traversals. Verify with comprehensive test cases."
            },
            {
              day: 4,
              title: "Algorithms: Sorting, Searching & Big-O",
              hours: "10h",
              topics: [
                "Big-O notation: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ) — with examples",
                "Bubble, selection, insertion sort — O(n²) — when they are acceptable",
                "Merge sort: divide and conquer — O(n log n) — stable sort",
                "Quick sort: pivot, partitioning — O(n log n) average — in-place",
                "Heap sort, counting sort, radix sort — special-case sorters",
                "Binary search: O(log n) — prerequisites and every variant"
              ],
              resources: [
                { name: "Algorithms – Sedgewick and Wayne (Book + Free Site)", url: "https://algs4.cs.princeton.edu/home/", type: "Free" },
                { name: "YouTube: Back To Back SWE – Sorting Algorithms", url: "https://www.youtube.com/@BackToBackSWE", type: "Free" },
                { name: "LeetCode – Sorting Tag (Easy → Medium)", url: "https://leetcode.com/", type: "Free" }
              ],
              project: "Implement merge sort and quicksort from scratch. Benchmark both vs Python built-in sort on 1M random numbers."
            },
            {
              day: 5,
              title: "Algorithms: Recursion, DP & Greedy",
              hours: "10h",
              topics: [
                "Recursion: base case, recursive case, call stack, recursion tree",
                "Memoization: top-down DP with a cache",
                "Tabulation: bottom-up DP — building the solution table",
                "Classic DP: Fibonacci, knapsack, LCS, coin change, edit distance, LIS",
                "Greedy algorithms: activity selection, Huffman coding, Dijkstra's",
                "Backtracking: N-queens, sudoku solver, permutations and subsets"
              ],
              resources: [
                { name: "Dynamic Programming – Aditya Verma (YouTube)", url: "https://www.youtube.com/@AdityaVermaTheProgrammingLord", type: "Free" },
                { name: "Introduction to Algorithms – CLRS (Book)", url: "https://mitpress.mit.edu/9780262046305/", type: "Book" }
              ],
              project: "Solve 10 LeetCode DP problems (Easy to Medium). Write time and space complexity analysis for every solution."
            },
            {
              day: 6,
              title: "Graph Algorithms",
              hours: "10h",
              topics: [
                "BFS: level-order traversal, shortest path in unweighted graphs",
                "DFS: topological sort, cycle detection, connected components, SCC",
                "Dijkstra's: shortest path weighted graphs — O((V+E) log V) with heap",
                "Bellman-Ford: handles negative weights — O(VE)",
                "Floyd-Warshall: all-pairs shortest path — O(V³)",
                "Minimum spanning trees: Kruskal's (union-find) and Prim's algorithms"
              ],
              resources: [
                { name: "YouTube: William Fiset – Graph Theory Playlist", url: "https://www.youtube.com/@WilliamFiset-videos", type: "Free" },
                { name: "CP-Algorithms – Graph Algorithms", url: "https://cp-algorithms.com/graph/", type: "Free" }
              ],
              project: "Implement Dijkstra's and BFS. Find shortest paths in a city graph dataset. Visualize routes with matplotlib."
            },
            {
              day: 7,
              title: "Week 21 DSA Capstone",
              hours: "10h",
              topics: ["Full DSA review and competitive practice"],
              resources: [
                { name: "NeetCode 150 – Curated Problem List", url: "https://neetcode.io/practice", type: "Free" }
              ],
              project: "CAPSTONE: Solve 15 LeetCode problems across arrays, trees, graphs, and DP. Write a personal Big-O complexity cheat sheet."
            }
          ]
        },
        {
          week: 2,
          title: "Web: HTML, CSS & JavaScript",
          days: [
            {
              day: 8,
              title: "HTML5: Semantic Structure",
              hours: "8h",
              topics: [
                "HTML document structure: DOCTYPE, html, head, body, meta tags",
                "Semantic elements: header, nav, main, section, article, aside, footer",
                "Text: h1-h6, p, span, strong, em, blockquote, pre, code",
                "Links, media: a, img, video, audio, picture, srcset for responsive images",
                "Forms: all input types, label, select, textarea, button, fieldset, validation",
                "Tables, lists, iframes — ARIA roles for accessibility"
              ],
              resources: [
                { name: "MDN Web Docs – HTML (The Gold Standard)", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "Free" },
                { name: "freeCodeCamp – Responsive Web Design Certification", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", type: "Free" },
                { name: "The Odin Project – Foundations Path", url: "https://www.theodinproject.com/", type: "Free" }
              ],
              project: "Build a fully semantic personal portfolio page with proper heading hierarchy, nav, media gallery, and a working contact form."
            },
            {
              day: 9,
              title: "CSS3: Styling, Layout & Responsive Design",
              hours: "10h",
              topics: [
                "CSS selectors: element, class, ID, attribute, pseudo-class, pseudo-element, specificity",
                "Box model: content, padding, border, margin — box-sizing: border-box",
                "Flexbox: flex-direction, justify-content, align-items, flex-wrap, gap",
                "CSS Grid: grid-template, grid-area, auto-fill, minmax, fr unit",
                "Positioning: static, relative, absolute, fixed, sticky",
                "Responsive: media queries, mobile-first, clamp(), viewport units (vw, vh, svh)",
                "CSS variables, transitions, animations, @keyframes, transforms"
              ],
              resources: [
                { name: "CSS Tricks – Complete Guides to Flexbox and Grid", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", type: "Free" },
                { name: "Kevin Powell – CSS YouTube Channel", url: "https://www.youtube.com/@KevinPowell", type: "Free" }
              ],
              project: "Build a pixel-perfect responsive SaaS landing page — desktop, tablet, mobile — using only HTML and CSS."
            },
            {
              day: 10,
              title: "JavaScript: Core Language",
              hours: "10h",
              topics: [
                "Variables: var vs let vs const — scope, hoisting, temporal dead zone",
                "Data types: primitives vs objects, type coercion, typeof, instanceof",
                "Functions: declarations, expressions, arrow functions, closures, IIFE",
                "Arrays: map, filter, reduce, forEach, find, some, every, flat, spread",
                "Objects: destructuring, spread, Object.keys/values/entries, computed props",
                "Prototypes, prototype chain, class syntax, inheritance",
                "Error handling: try/catch/finally, custom Error classes"
              ],
              resources: [
                { name: "JavaScript.info – The Modern JavaScript Tutorial", url: "https://javascript.info/", type: "Free" },
                { name: "Eloquent JavaScript – Free Book Online", url: "https://eloquentjavascript.net/", type: "Free" }
              ],
              project: "Build a quiz app with 20 questions, score tracking, countdown timer, and results screen — vanilla JS only."
            },
            {
              day: 11,
              title: "JavaScript: Async, DOM & Browser APIs",
              hours: "10h",
              topics: [
                "DOM manipulation: querySelector, createElement, innerHTML, classList, dataset",
                "Events: addEventListener, bubbling, delegation, preventDefault, stopPropagation",
                "Async JavaScript: callbacks → Promises → async/await — the evolution",
                "Fetch API: GET, POST, headers, JSON parsing, error handling",
                "LocalStorage, sessionStorage, IndexedDB, cookies — when to use each",
                "Web APIs: Geolocation, Intersection Observer, Web Workers, WebSockets"
              ],
              resources: [
                { name: "JavaScript.info – Browser: Document, Events, Interfaces", url: "https://javascript.info/", type: "Free" },
                { name: "YouTube: Traversy Media – JavaScript DOM Crash Course", url: "https://www.youtube.com/@TraversyMedia", type: "Free" }
              ],
              project: "Build a full weather dashboard: fetch live weather API, display 5-day forecast, animated condition icons, geolocation."
            },
            {
              day: 12,
              title: "TypeScript & React.js",
              hours: "10h",
              topics: [
                "TypeScript: types, interfaces, generics, union types, utility types (Partial, Pick, Omit)",
                "React philosophy: component-based, declarative, virtual DOM diffing",
                "JSX, functional components, props, prop drilling problem",
                "Hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, custom hooks",
                "React Router v6: nested routes, dynamic params, loader, action",
                "State management: Context API, Zustand — when to reach for each"
              ],
              resources: [
                { name: "React Official Docs – react.dev", url: "https://react.dev/", type: "Free" },
                { name: "Total TypeScript – Matt Pocock (Free Tutorials)", url: "https://www.totaltypescript.com/", type: "Free" }
              ],
              project: "Build a React + TypeScript e-commerce catalog with cart, filters, search, dark mode, and React Router."
            },
            {
              day: 13,
              title: "Node.js, Express & REST APIs",
              hours: "10h",
              topics: [
                "Node.js: event loop, non-blocking I/O, CommonJS vs ES modules",
                "npm: package.json, semver, scripts, npx, lockfiles",
                "Express.js: routing, middleware chain, request/response cycle",
                "RESTful API design: endpoints, HTTP verbs, status codes, versioning",
                "Middleware: body-parser, cors, helmet, morgan, rate-limiting",
                "JWT authentication: register, login, protect routes, refresh tokens"
              ],
              resources: [
                { name: "The Odin Project – NodeJS Path", url: "https://www.theodinproject.com/paths/full-stack-javascript", type: "Free" },
                { name: "YouTube: Traversy Media – Express Crash Course", url: "https://www.youtube.com/@TraversyMedia", type: "Free" }
              ],
              project: "Build a full REST API: blog with CRUD posts and comments, JWT auth, rate limiting, and Swagger docs."
            },
            {
              day: 14,
              title: "Week 22 Full-Stack Capstone",
              hours: "12h",
              topics: ["Production full-stack web application"],
              resources: [
                { name: "Vercel – Free Frontend Deployment", url: "https://vercel.com/", type: "Free" },
                { name: "Railway – Free Backend Deployment", url: "https://railway.app/", type: "Free" }
              ],
              project: "CAPSTONE: Build and deploy a full-stack React + TypeScript + Node/Express + PostgreSQL app with JWT auth — live on Vercel + Railway."
            }
          ]
        },
        {
          week: 3,
          title: "C, C++, Java & Systems Programming",
          days: [
            {
              day: 15,
              title: "C Programming Foundations",
              hours: "10h",
              topics: [
                "C compilation: preprocessor → compiler → assembler → linker",
                "Data types: int, char, float, double, short, long, unsigned, size_t",
                "Pointers: address-of (&), dereference (*), pointer arithmetic, void*",
                "Arrays and strings: char arrays, null-terminator, string.h functions",
                "Dynamic memory: malloc, calloc, realloc, free — memory leaks, dangling pointers",
                "Structs, unions, enums, typedef, function pointers"
              ],
              resources: [
                { name: "CS50x – C sections (Weeks 1–4)", url: "https://cs50.harvard.edu/x/", type: "Free" },
                { name: "Beej's Guide to C Programming – Free Online Book", url: "https://beej.us/guide/bgc/", type: "Free" },
                { name: "C Programming: A Modern Approach – K.N. King (Book)", url: "https://www.amazon.com/C-Programming-Modern-Approach-2nd/dp/0393979504", type: "Book" }
              ],
              project: "Build a mini file compression tool in C using run-length encoding. Handle binary files correctly with no memory leaks."
            },
            {
              day: 16,
              title: "C: Pointers, Memory & Systems Deep Dive",
              hours: "10h",
              topics: [
                "Stack vs heap memory — when and why each is used",
                "Multi-dimensional arrays and pointer-to-pointer (**ptr)",
                "Bit manipulation: AND, OR, XOR, NOT, shift operators — practical uses",
                "Linked list implementation in C with raw pointers",
                "Valgrind: detecting memory leaks and invalid accesses",
                "Makefile: build automation for multi-file C projects"
              ],
              resources: [
                { name: "YouTube: Jacob Sorber – C Systems Programming", url: "https://www.youtube.com/@JacobSorber", type: "Free" },
                { name: "Valgrind User Manual", url: "https://valgrind.org/docs/manual/", type: "Free" }
              ],
              project: "Implement a generic hash table in C using separate chaining. Test with 1M insertions. Profile with Valgrind."
            },
            {
              day: 17,
              title: "C++: OOP & Modern Features",
              hours: "10h",
              topics: [
                "Classes: constructor, destructor, member functions, access specifiers",
                "Inheritance: single, multiple, virtual functions, pure virtual, abstract classes",
                "Polymorphism: runtime (virtual dispatch) vs compile-time (templates)",
                "Operator overloading: +, ==, <<, [], () — best practices",
                "Smart pointers: unique_ptr, shared_ptr, weak_ptr — RAII principle",
                "Move semantics: rvalue references (&&), std::move, perfect forwarding",
                "STL: vector, map, unordered_map, set, priority_queue, algorithms"
              ],
              resources: [
                { name: "learncpp.com – The Best Free C++ Tutorial", url: "https://www.learncpp.com/", type: "Free" },
                { name: "Effective Modern C++ – Scott Meyers (Book)", url: "https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996", type: "Book" },
                { name: "CppCon Talks – YouTube", url: "https://www.youtube.com/@CppCon", type: "Free" }
              ],
              project: "Build a thread-safe concurrent task queue in C++17 using smart pointers, mutexes, and condition variables."
            },
            {
              day: 18,
              title: "Java: Enterprise Language",
              hours: "10h",
              topics: [
                "JVM architecture: bytecode, class loading, JIT, garbage collection (G1, ZGC)",
                "Java OOP: classes, interfaces, abstract classes, enums, records (Java 16+)",
                "Collections: ArrayList, HashMap, LinkedList, TreeMap, HashSet — when to use each",
                "Generics, wildcards, bounded type parameters",
                "Java Streams API: filter, map, reduce, collectors — functional pipeline style",
                "Concurrency: Thread, Runnable, ExecutorService, CompletableFuture, virtual threads"
              ],
              resources: [
                { name: "MOOC.fi – Java Programming (University of Helsinki, Free)", url: "https://java-programming.mooc.fi/", type: "Free" },
                { name: "Effective Java – Joshua Bloch (Book)", url: "https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997", type: "Book" }
              ],
              project: "Build a Java Spring Boot REST API for inventory management with JPA/Hibernate and PostgreSQL."
            },
            {
              day: 19,
              title: "Python Deep Dive: Advanced Language Features",
              hours: "9h",
              topics: [
                "Decorators: functools.wraps, stacking decorators, class decorators",
                "Generators and iterators: yield, yield from, __iter__, __next__",
                "Context managers: __enter__, __exit__, contextlib",
                "Metaclasses: type, __new__, __init_subclass__, ABCMeta",
                "Concurrency: threading, multiprocessing, asyncio, aiohttp — choosing the right one",
                "Python internals: GIL, memory management, reference counting, __slots__"
              ],
              resources: [
                { name: "Fluent Python – Luciano Ramalho (Book)", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/", type: "Book" },
                { name: "YouTube: ArjanCodes – Python Best Practices", url: "https://www.youtube.com/@ArjanCodes", type: "Free" }
              ],
              project: "Build an async web crawler using asyncio + aiohttp that crawls 500 URLs concurrently. Profile and optimize."
            },
            {
              day: 20,
              title: "Go, Rust & Other Essential Languages",
              hours: "9h",
              topics: [
                "Go: goroutines, channels, defer, interfaces, error handling, Go modules",
                "Go standard library: net/http, encoding/json, sync, context package",
                "Rust: ownership, borrowing, lifetimes — memory safety without GC",
                "Rust: enums, match, Option<T>, Result<T,E>, traits, iterators",
                "Kotlin: null safety, coroutines, data classes, extension functions",
                "Swift: optionals, closures, protocols, SwiftUI basics"
              ],
              resources: [
                { name: "Tour of Go – Official Interactive Tutorial", url: "https://go.dev/tour/", type: "Free" },
                { name: "The Rust Book – Official Free Online", url: "https://doc.rust-lang.org/book/", type: "Free" }
              ],
              project: "Build a concurrent web scraper in Go: fetch 200 URLs simultaneously with goroutines and channels. Handle errors gracefully."
            },
            {
              day: 21,
              title: "Week 23 Systems Capstone",
              hours: "12h",
              topics: ["Multi-language implementation challenge"],
              resources: [],
              project: "CAPSTONE: Implement the same problem (mini expression evaluator / interpreter) in C, C++, Java, Python, and Go. Compare performance, memory usage, and code clarity."
            }
          ]
        },
        {
          week: 4,
          title: "Web Scraping & Databases",
          days: [
            {
              day: 22,
              title: "Web Scraping: requests, BeautifulSoup & Scrapy",
              hours: "9h",
              topics: [
                "How the web works for scrapers: HTTP request/response, HTML parsing",
                "requests library: GET, POST, sessions, headers, cookies, proxies",
                "BeautifulSoup4: navigating HTML trees, CSS selectors, find/find_all",
                "XPath selectors: the scraper's Swiss army knife",
                "Scrapy: spiders, items, pipelines, middlewares, deployment",
                "Robots.txt: ethical scraping, rate limiting, respecting ToS"
              ],
              resources: [
                { name: "Real Python – Web Scraping with BeautifulSoup", url: "https://realpython.com/beautiful-soup-web-scraper-python/", type: "Free" },
                { name: "Scrapy Official Documentation", url: "https://docs.scrapy.org/en/latest/", type: "Free" }
              ],
              project: "Build a Scrapy spider crawling an e-commerce site recursively. Store all products in PostgreSQL via pipeline."
            },
            {
              day: 23,
              title: "Browser Automation: Playwright & Selenium",
              hours: "9h",
              topics: [
                "Selenium WebDriver: browser automation, element interaction, waits",
                "Playwright Python: faster, more reliable, modern alternative",
                "Locators: CSS selectors, XPath, role-based — best practices",
                "Handling JavaScript SPAs: React/Vue/Angular sites",
                "Stealth techniques: rotating user-agents, proxy pools, anti-detection",
                "CAPTCHA handling: 2captcha API, ethical considerations"
              ],
              resources: [
                { name: "Playwright Python Official Docs", url: "https://playwright.dev/python/", type: "Free" },
                { name: "YouTube: Tech With Tim – Selenium Python", url: "https://www.youtube.com/@TechWithTim", type: "Free" }
              ],
              project: "Automate a job search: scrape live job listings with Playwright, filter by keyword and salary, export to CSV."
            },
            {
              day: 24,
              title: "SQL Deep Dive & PostgreSQL",
              hours: "10h",
              topics: [
                "SQL: SELECT, WHERE, JOIN (INNER, LEFT, RIGHT, FULL OUTER), GROUP BY, HAVING",
                "Window functions: ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE",
                "CTEs and recursive CTEs: organizational hierarchies, date sequences",
                "Database design: normalization 1NF to 3NF, ER diagrams, foreign keys",
                "Indexes: B-tree, composite, covering index — EXPLAIN ANALYZE for tuning",
                "Transactions: ACID, BEGIN/COMMIT/ROLLBACK, isolation levels",
                "PostgreSQL extras: JSONB, arrays, full-text search, pg_trgm"
              ],
              resources: [
                { name: "PostgreSQL Official Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html", type: "Free" },
                { name: "Use The Index, Luke – SQL Indexing Guide", url: "https://use-the-index-luke.com/", type: "Free" }
              ],
              project: "Design a full e-commerce PostgreSQL schema. Write 20 real queries: window functions, CTEs, JSONB, full-text search."
            },
            {
              day: 25,
              title: "NoSQL: MongoDB, Redis & Vector DBs",
              hours: "9h",
              topics: [
                "NoSQL types: document, key-value, column-family, graph — when each fits",
                "MongoDB: documents, collections, Mongoose ODM, aggregation pipeline",
                "Redis: in-memory — strings, hashes, sorted sets, pub/sub, rate limiting",
                "Vector databases: Pinecone, Weaviate, pgvector — semantic search for AI",
                "Graph databases: Neo4j, Cypher query language",
                "Choosing the right database: decision framework for real projects"
              ],
              resources: [
                { name: "MongoDB University – Free Courses", url: "https://learn.mongodb.com/", type: "Free" },
                { name: "Redis University – Free Courses", url: "https://university.redis.com/", type: "Free" }
              ],
              project: "Build a real-time chat app with MongoDB (messages) + Redis (presence tracking + pub/sub live delivery)."
            },
            {
              day: 26,
              title: "APIs: REST, GraphQL & gRPC",
              hours: "9h",
              topics: [
                "REST vs GraphQL vs gRPC — deep comparison with real trade-offs",
                "GraphQL: schema definition, queries, mutations, subscriptions, resolvers",
                "gRPC: Protocol Buffers, streaming, 10x faster than REST for internal APIs",
                "API rate limiting, cursor-based pagination, versioning strategies",
                "Webhooks: event-driven server-to-server communication",
                "OpenAPI/Swagger: documenting, testing, and generating client SDKs"
              ],
              resources: [
                { name: "GraphQL Official Learn", url: "https://graphql.org/learn/", type: "Free" },
                { name: "Postman Academy – API Testing", url: "https://academy.postman.com/", type: "Free" }
              ],
              project: "Build a GraphQL API with subscriptions for your chat app. Add rate limiting and OpenAPI documentation."
            },
            {
              day: 27,
              title: "System Design",
              hours: "9h",
              topics: [
                "Monolith vs microservices vs serverless — trade-offs and migration paths",
                "API Gateway, load balancer, reverse proxy (Nginx) — roles in architecture",
                "Caching strategies: CDN, browser cache, server-side, cache invalidation",
                "Message queues: RabbitMQ, Kafka — async processing, event-driven design",
                "CAP theorem: consistency, availability, partition tolerance",
                "Design exercises: URL shortener, Twitter feed, Netflix, WhatsApp"
              ],
              resources: [
                { name: "System Design Primer – GitHub (donnemartin)", url: "https://github.com/donnemartin/system-design-primer", type: "Free" },
                { name: "YouTube: ByteByteGo – System Design Channel", url: "https://www.youtube.com/@ByteByteGo", type: "Free" },
                { name: "Designing Data-Intensive Applications – Kleppmann (Book)", url: "https://dataintensive.net/", type: "Book" }
              ],
              project: "Design a complete system architecture for a real-time ride-sharing app. Draw full diagram with all components."
            },
            {
              day: 28,
              title: "Week 24 Scraping & DB Capstone",
              hours: "12h",
              topics: ["Full data collection and storage pipeline"],
              resources: [],
              project: "CAPSTONE: Market intelligence platform — Scrapy for competitor data + Playwright for dynamic sites + PostgreSQL + Redis cache + GraphQL API + React dashboard + auto-refresh daily scheduler."
            }
          ]
        },
        {
          week: 5,
          title: "DevOps, Cloud & Cybersecurity",
          days: [
            {
              day: 29,
              title: "Linux, Git & Docker",
              hours: "10h",
              topics: [
                "Linux commands: ls, cd, find, grep, awk, sed, chmod, chown, ssh, scp, cron",
                "Shell scripting: bash variables, loops, conditions, functions",
                "Git advanced: rebase (interactive), cherry-pick, bisect, reflog, hooks",
                "Branching strategies: GitFlow, trunk-based development",
                "Docker: Dockerfile, multi-stage builds, Docker Compose, volumes, networks",
                "Container registries: Docker Hub, GitHub Container Registry, ECR"
              ],
              resources: [
                { name: "The Linux Command Line – Free Book (William Shotts)", url: "https://linuxcommand.org/tlcl.php", type: "Free" },
                { name: "Pro Git Book – Free Online", url: "https://git-scm.com/book/en/v2", type: "Free" },
                { name: "Docker Official Get Started Tutorial", url: "https://docs.docker.com/get-started/", type: "Free" }
              ],
              project: "Write a bash monitoring script. Set up advanced Git hooks for linting. Containerize full-stack app with Docker Compose."
            },
            {
              day: 30,
              title: "Kubernetes, CI/CD & Cloud",
              hours: "10h",
              topics: [
                "Kubernetes: Pods, Deployments, Services, Ingress, ConfigMap, Secret, HPA",
                "kubectl: get, describe, apply, delete, exec, logs — daily workflow",
                "GitHub Actions: workflows, jobs, runners, secrets, marketplace actions",
                "CI/CD pipeline: lint → test → build → push Docker → deploy to K8s",
                "AWS core: EC2, S3, RDS, Lambda, CloudFront, Route53, IAM, VPC",
                "Terraform: infrastructure as code — providers, resources, state, modules"
              ],
              resources: [
                { name: "Kubernetes Official Interactive Tutorial", url: "https://kubernetes.io/docs/tutorials/", type: "Free" },
                { name: "YouTube: TechWorld with Nana – K8s Full Course", url: "https://www.youtube.com/@TechWorldwithNana", type: "Free" },
                { name: "Terraform Official Learn", url: "https://developer.hashicorp.com/terraform/tutorials", type: "Free" }
              ],
              project: "Deploy full-stack app to Kubernetes on AWS with GitHub Actions CI/CD. Full pipeline: push → test → deploy."
            },
            {
              day: 31,
              title: "Cybersecurity: Fundamentals & Web Hacking",
              hours: "10h",
              topics: [
                "CIA Triad, MITRE ATT&CK framework, defense in depth",
                "OWASP Top 10: SQL injection, XSS, CSRF, IDOR, SSRF — exploitation and defense",
                "Burp Suite: intercepting proxy, repeater, intruder — web app testing",
                "Wireshark + nmap: packet analysis and port scanning",
                "PortSwigger Web Security Academy: hands-on lab methodology",
                "Metasploit: exploits, payloads, meterpreter — ethical hacking basics"
              ],
              resources: [
                { name: "PortSwigger Web Security Academy – Free", url: "https://portswigger.net/web-security", type: "Free" },
                { name: "TryHackMe – Jr Penetration Tester Path", url: "https://tryhackme.com/", type: "Free/Paid" },
                { name: "YouTube: IppSec – HackTheBox Walkthroughs", url: "https://www.youtube.com/@ippsec", type: "Free" }
              ],
              project: "Complete 15 PortSwigger labs (SQL injection, XSS, CSRF, SSRF). Pwn one HackTheBox easy machine end-to-end."
            },
            {
              day: 32,
              title: "Cryptography & Blue Team Defense",
              hours: "9h",
              topics: [
                "Symmetric encryption: AES-GCM modes, key management",
                "Asymmetric: RSA, ECC — public/private key pairs, digital signatures",
                "Hashing: SHA-256, SHA-3, BLAKE3 — password hashing with bcrypt/Argon2",
                "TLS/PKI: certificate chain, HSTS, certificate transparency",
                "SIEM with ELK Stack: log ingestion, alerting, threat hunting",
                "Incident response: PICERL process, forensics with Volatility"
              ],
              resources: [
                { name: "CryptoHack.org – Interactive Cryptography Challenges", url: "https://cryptohack.org/", type: "Free" },
                { name: "TryHackMe – SOC Level 1 Path", url: "https://tryhackme.com/path/outline/soclevel1", type: "Paid" }
              ],
              project: "Implement AES-GCM and RSA from scratch in Python. Set up ELK Stack. Write 5 detection rules. Trigger and detect them."
            },
            {
              day: 33,
              title: "Software Engineering Best Practices",
              hours: "9h",
              topics: [
                "Clean Code: meaningful names, small functions, DRY, KISS, YAGNI",
                "SOLID principles — with real code examples in Python and Java",
                "Design patterns: Factory, Observer, Strategy, Repository, CQRS",
                "Testing pyramid: pytest + Jest — unit, integration, E2E with Playwright",
                "Performance profiling: cProfile, py-spy, EXPLAIN ANALYZE, k6 load testing",
                "Technical debt: identifying, quantifying, and systematically reducing it"
              ],
              resources: [
                { name: "Clean Code – Robert C. Martin (Book)", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", type: "Book" },
                { name: "Refactoring.guru – Design Patterns & Refactoring", url: "https://refactoring.guru/", type: "Free" }
              ],
              project: "Refactor a messy open-source codebase: identify 10 code smells, apply 5 design patterns, add test suite with 80% coverage."
            },
            {
              day: 34,
              title: "AI/ML Engineering & LLM Integration",
              hours: "10h",
              topics: [
                "scikit-learn ML pipeline: preprocessing → training → evaluation → deployment",
                "Deep learning with PyTorch: tensors, nn.Module, training loop, DataLoader",
                "Fine-tuning with Hugging Face: BERT, GPT-2, ViT on custom datasets",
                "LLM integration: OpenAI/Anthropic API, function calling, structured outputs",
                "RAG (Retrieval Augmented Generation): embeddings, vector search, LangChain",
                "MLflow: experiment tracking, model registry, serving"
              ],
              resources: [
                { name: "fast.ai – Practical Deep Learning for Coders (Free)", url: "https://www.fast.ai/", type: "Free" },
                { name: "Andrej Karpathy – Neural Networks Zero to Hero (YouTube)", url: "https://www.youtube.com/@AndrejKarpathy", type: "Free" },
                { name: "LangChain Official Docs", url: "https://docs.langchain.com/", type: "Free" }
              ],
              project: "Build a RAG-powered document chatbot: ingest PDFs → chunk → embed → store in pgvector → query with Claude/GPT API. Deploy as web app."
            },
            {
              day: 35,
              title: "Week 25 DevOps + Security Capstone",
              hours: "12h",
              topics: ["Production-grade DevSecOps pipeline"],
              resources: [],
              project: "CAPSTONE: Full production deployment — Dockerized microservices → Kubernetes → GitHub Actions CI/CD → AWS → Prometheus + Grafana monitoring → ELK security SIEM → load tested to 1000 RPS."
            }
          ]
        },
        {
          week: 6,
          title: "Technical Interviews & CS Career Launch",
          days: [
            {
              day: 36,
              title: "Technical Interview Mastery",
              hours: "10h",
              topics: [
                "LeetCode problem-solving framework: understand → examples → brute force → optimize → code → test",
                "Top 10 coding patterns: sliding window, two pointers, fast/slow, merge intervals, cyclic sort, BFS/DFS, backtracking, DP, binary search, heap",
                "System design interview framework: functional req → non-functional req → capacity → high-level → deep dive → bottlenecks",
                "Behavioral: STAR method, Amazon Leadership Principles, handling failure stories",
                "Mock interviews: Pramp, Interviewing.io — practicing under time pressure",
                "Salary negotiation: research on Levels.fyi, total comp, anchoring techniques"
              ],
              resources: [
                { name: "NeetCode – LeetCode Solutions + Roadmap", url: "https://neetcode.io/", type: "Free" },
                { name: "Pramp – Free Mock Interviews", url: "https://www.pramp.com/", type: "Free" },
                { name: "Grokking the Coding Interview – DesignGurus.io", url: "https://www.designgurus.io/", type: "Paid" }
              ],
              project: "Solve 30 LeetCode problems using the 10 patterns. Complete 3 mock system design interviews. Record yourself explaining solutions."
            },
            {
              day: 37,
              title: "CS Portfolio, Open Source & Career Launch",
              hours: "9h",
              topics: [
                "GitHub profile README: badges, contribution graph, pinned repos",
                "Writing great project READMEs: demo GIFs, architecture diagrams, install guides",
                "Personal developer site with Next.js or Astro — deployed on Vercel",
                "Open source contribution: find an issue, fork, PR, get it merged",
                "AWS Solutions Architect, CompTIA Security+, CKA certification roadmap",
                "Job application strategy: cold outreach, referrals, recruiters, LinkedIn DMs"
              ],
              resources: [
                { name: "GitHub Good First Issues", url: "https://goodfirstissues.com/", type: "Free" },
                { name: "Levels.fyi – Software Engineer Salary Research", url: "https://www.levels.fyi/", type: "Free" },
                { name: "Astro – Fast Static Site Framework", url: "https://astro.build/", type: "Free" }
              ],
              project: "Build and deploy developer portfolio site. Make one meaningful open source PR. Apply to 10 target companies."
            },
            {
              day: 38,
              title: "CS Phase Graduation",
              hours: "8h",
              topics: ["Complete CS portfolio review", "Cross-discipline integration planning", "Career roadmap finalization"],
              resources: [],
              project: "GRADUATION: Present your complete CS portfolio — DSA write-ups, full-stack apps, systems programs, security write-ups, DevOps infra, AI integrations. You are now a well-rounded software engineer."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Graphic Design Foundations",
      color: "#FF6B35",
      accent: "#FFD166",
      duration: "Weeks 7–9",
      weeks: [
        {
          week: 7,
          title: "Design Principles & Tools",
          days: [
            {
              day: 39,
              title: "Design Thinking & Visual Hierarchy",
              hours: "8h",
              topics: [
                "The 7 principles of design: balance, contrast, emphasis, movement, pattern, rhythm, unity",
                "Visual hierarchy: size, color, contrast, alignment, repetition",
                "Gestalt principles: proximity, similarity, closure, continuity",
                "Reading: 'The Elements of Graphic Design' by Alex White (Chapters 1–3)"
              ],
              resources: [
                { name: "Canva Design School – Design Fundamentals", url: "https://www.canva.com/learn/design-elements-principles/", type: "Free" },
                { name: "GCFGlobal – Beginning Graphic Design", url: "https://edu.gcfglobal.org/en/beginning-graphic-design/", type: "Free" },
                { name: "YouTube: The Futur – Design Principles", url: "https://www.youtube.com/@thefutur", type: "Free" }
              ],
              project: "Analyze 5 famous logos. Identify every design principle used. Sketch your observations."
            },
            {
              day: 40,
              title: "Color Theory Deep Dive",
              hours: "8h",
              topics: [
                "Color wheel: primary, secondary, tertiary colors",
                "Color harmonies: complementary, analogous, triadic, split-complementary, tetradic",
                "Color psychology in branding and design",
                "HSL vs RGB vs CMYK vs HEX — when to use each",
                "Warm vs cool, saturation, value, tints, shades, tones"
              ],
              resources: [
                { name: "Adobe Color CC (Free Tool)", url: "https://color.adobe.com/", type: "Free" },
                { name: "Interaction Design Foundation – Color Theory", url: "https://www.interaction-design.org/literature/topics/color-theory", type: "Free" },
                { name: "Coursera: CalArts Graphic Design Specialization (Week 1)", url: "https://www.coursera.org/specializations/graphic-design", type: "Paid" }
              ],
              project: "Create 5 color palettes (one per harmony type) for an imaginary brand using Adobe Color."
            },
            {
              day: 41,
              title: "Typography Mastery",
              hours: "9h",
              topics: [
                "Type anatomy: serif, sans-serif, slab, script, display",
                "Type classification and historical context",
                "Leading, kerning, tracking, baseline, x-height",
                "Typographic hierarchy: headings, subheadings, body, captions",
                "Pairing fonts: contrast + harmony rule",
                "Web vs print typography"
              ],
              resources: [
                { name: "Thinking with Type (Book + Website)", url: "http://thinkingwithtype.com/", type: "Free" },
                { name: "Google Fonts Knowledge", url: "https://fonts.google.com/knowledge", type: "Free" },
                { name: "Typewolf – Font Inspiration & Pairings", url: "https://www.typewolf.com/", type: "Free" }
              ],
              project: "Design a 1-page typographic poster using only type — no images. Use 2 fonts maximum."
            },
            {
              day: 42,
              title: "Adobe Illustrator – Core Mastery",
              hours: "10h",
              topics: [
                "Interface, workspace, panels and tools overview",
                "Pen tool mastery: bezier curves, anchor points",
                "Shape builder, pathfinder operations",
                "Vector illustration fundamentals",
                "Layers, groups, artboards",
                "Gradient mesh, clipping masks"
              ],
              resources: [
                { name: "Adobe Illustrator Official Tutorials", url: "https://helpx.adobe.com/illustrator/tutorials.html", type: "Free" },
                { name: "Illustrator CC – Essentials Training (Udemy – Daniel Walter Scott)", url: "https://www.udemy.com/course/illustrator-cc-essential-training/", type: "Paid" },
                { name: "Skillshare: Illustrator for Beginners – Evgeniya Righini-Brand", url: "https://www.skillshare.com/", type: "Paid" }
              ],
              project: "Recreate 3 famous logos from scratch using only the pen tool and shapes in Illustrator."
            },
            {
              day: 43,
              title: "Adobe Photoshop – Core Mastery",
              hours: "10h",
              topics: [
                "Layers, masks, blending modes",
                "Selection tools: lasso, magic wand, quick select, pen",
                "Adjustment layers: curves, levels, hue/saturation, color balance",
                "Retouching: heal, clone, frequency separation",
                "Smart objects and non-destructive editing",
                "Photo compositing basics"
              ],
              resources: [
                { name: "Adobe Photoshop Learn & Support", url: "https://helpx.adobe.com/photoshop/tutorials.html", type: "Free" },
                { name: "Photoshop CC – Essentials (Udemy – Daniel Walter Scott)", url: "https://www.udemy.com/course/adobe-photoshop-cc-essentials-training-course/", type: "Paid" },
                { name: "PHLEARN YouTube Channel", url: "https://www.youtube.com/@PHLEARN", type: "Free" }
              ],
              project: "Photo manipulation: Place a person into a fantasy environment using compositing techniques."
            },
            {
              day: 44,
              title: "Layout Design & Grid Systems",
              hours: "9h",
              topics: [
                "The Swiss grid system and column grids",
                "Rule of thirds, golden ratio in layout",
                "White space as a design element",
                "F-pattern and Z-pattern reading behavior",
                "Print layout: bleed, trim, safe zone",
                "InDesign basics for multi-page documents"
              ],
              resources: [
                { name: "InDesign Official Tutorials – Adobe", url: "https://helpx.adobe.com/indesign/tutorials.html", type: "Free" },
                { name: "Grid Systems in Graphic Design (Book – Josef Müller-Brockmann)", url: "https://www.amazon.com/Grid-Systems-Graphic-Design/dp/3721201450", type: "Book" },
                { name: "Canva Learn: Layout Design", url: "https://www.canva.com/learn/", type: "Free" }
              ],
              project: "Design a 4-page magazine spread about a topic of your choice in InDesign."
            },
            {
              day: 45,
              title: "Week 1 Project Day",
              hours: "10h",
              topics: [
                "Review all Week 1 concepts",
                "Build complete brand identity from scratch"
              ],
              resources: [
                { name: "Behance – Brand Identity Inspiration", url: "https://www.behance.net/search/projects?field=branding", type: "Free" },
                { name: "Brand New Blog – Identity Case Studies", url: "https://www.underconsideration.com/brandnew/", type: "Free" }
              ],
              project: "CAPSTONE: Create a complete brand identity for a fictional coffee shop: logo, color palette, typography, business card, letterhead, and social media template."
            }
          ]
        },
        {
          week: 8,
          title: "Advanced Design & Digital Applications",
          days: [
            {
              day: 46,
              title: "Logo Design Theory & Process",
              hours: "9h",
              topics: [
                "Types of logos: wordmark, lettermark, icon, combination, emblem",
                "Logo design process: brief → research → sketching → refinement → delivery",
                "Scalability, versatility, timelessness",
                "Negative space techniques",
                "Golden ratio in logo design"
              ],
              resources: [
                { name: "Logo Design Love (Book – David Airey)", url: "https://www.davidairey.com/books/logo-design-love/", type: "Book" },
                { name: "YouTube: Aaron Draplin – Logo Design Keynote", url: "https://www.youtube.com/watch?v=zOPA0NaeTBk", type: "Free" },
                { name: "Logocore – Free Logo Design Course (30 logos in 30 days)", url: "https://logocore.com/", type: "Free" }
              ],
              project: "Design 3 logos from scratch using full process: brief, sketch, digital. Present in brand mockup."
            },
            {
              day: 47,
              title: "Poster & Print Design",
              hours: "9h",
              topics: [
                "Event poster design principles",
                "Print production: resolution (300dpi), color modes (CMYK), file formats",
                "Illustration + typography integration",
                "Hierarchy and focal points",
                "Printing terminology: offset, digital, screen"
              ],
              resources: [
                { name: "Skillshare: Poster Design Masterclass", url: "https://www.skillshare.com/", type: "Paid" },
                { name: "Dribbble – Poster Inspiration", url: "https://dribbble.com/tags/poster", type: "Free" },
                { name: "Graphic Design School (Book – David Dabner)", url: "https://www.amazon.com/Graphic-Design-School-David-Dabner/dp/1119618436", type: "Book" }
              ],
              project: "Design a concert poster for a fictional artist using hand-lettering + illustration hybrid style."
            },
            {
              day: 48,
              title: "Social Media & Digital Design",
              hours: "9h",
              topics: [
                "Platform specifications: Instagram, Facebook, YouTube, LinkedIn",
                "Visual consistency across touchpoints",
                "Templates and design systems",
                "Figma for digital design (intro)",
                "Exporting for web: PNG, SVG, WebP"
              ],
              resources: [
                { name: "Figma Official Learn", url: "https://www.figma.com/resource-library/", type: "Free" },
                { name: "Figma Course – DesignCourse (YouTube)", url: "https://www.youtube.com/@DesignCourse", type: "Free" },
                { name: "Sprout Social: Social Media Image Size Guide 2025", url: "https://sproutsocial.com/insights/social-media-image-sizes-guide/", type: "Free" }
              ],
              project: "Design a 9-post Instagram grid with cohesive visual identity for a lifestyle brand."
            },
            {
              day: 49,
              title: "Packaging & Branding Applications",
              hours: "10h",
              topics: [
                "Packaging design: dieline templates, 3D mockups",
                "Label design: hierarchy, legal text, barcode placement",
                "Brand touchpoints: stationery, merch, signage",
                "Mockup creation and presentation",
                "Client-ready file preparation"
              ],
              resources: [
                { name: "MockupWorld – Free Mockups", url: "https://www.mockupworld.co/", type: "Free" },
                { name: "The Dieline – Packaging News & Inspiration", url: "https://thedieline.com/", type: "Free" },
                { name: "Skillshare: Packaging Design (Jessica Hische)", url: "https://www.skillshare.com/", type: "Paid" }
              ],
              project: "Design a complete packaging concept for a premium skincare product. Include front, back, and side panels."
            },
            {
              day: 50,
              title: "UI/UX Design Basics",
              hours: "9h",
              topics: [
                "UX principles: user-centered design, wireframing",
                "UI components: buttons, cards, forms, navigation",
                "Design systems and component libraries",
                "Figma: auto-layout, components, prototyping",
                "Accessibility in design: contrast, color blindness"
              ],
              resources: [
                { name: "Google UX Design Certificate (Coursera) – Course 1", url: "https://www.coursera.org/professional-certificates/google-ux-design", type: "Paid" },
                { name: "Laws of UX", url: "https://lawsofux.com/", type: "Free" },
                { name: "Figma YouTube – Official Tutorials", url: "https://www.youtube.com/@Figma", type: "Free" }
              ],
              project: "Design a mobile app UI (10 screens) for a food delivery service using Figma with components."
            },
            {
              day: 51,
              title: "Advanced Illustration Techniques",
              hours: "9h",
              topics: [
                "Flat illustration style: shapes, limited palette",
                "Isometric illustration",
                "Character design basics",
                "Icon design systems",
                "Procreate intro (iPad) or Illustrator brush techniques"
              ],
              resources: [
                { name: "Procreate Official Handbook", url: "https://procreate.com/handbook", type: "Free" },
                { name: "Skillshare: Flat Illustration (Cécile Dormeau)", url: "https://www.skillshare.com/", type: "Paid" },
                { name: "YouTube: Robert Marzullo – Illustrator Character Design", url: "https://www.youtube.com/@robertmarzullo", type: "Free" }
              ],
              project: "Design a set of 10 custom icons for a tech startup and one hero illustration."
            },
            {
              day: 52,
              title: "Week 2 Capstone",
              hours: "10h",
              topics: ["Full brand identity system", "Presentation deck creation"],
              resources: [
                { name: "Behance – Portfolio Presentation Examples", url: "https://www.behance.net/", type: "Free" }
              ],
              project: "CAPSTONE: Complete brand identity system — logo suite, color system, typography guide, business stationery, packaging, social media kit, and presentation mockup deck."
            }
          ]
        },
        {
          week: 9,
          title: "Advanced Graphic Design",
          days: [
            {
              day: 53,
              title: "Motion Graphics Intro with After Effects",
              hours: "10h",
              topics: [
                "After Effects interface: timeline, panels, properties",
                "Keyframes, easing, graph editor",
                "Text animations and presets",
                "Shape layer animations",
                "Intro to expressions: wiggle, loopOut"
              ],
              resources: [
                { name: "School of Motion – After Effects Kickstart (Free Lessons)", url: "https://www.schoolofmotion.com/after-effects-kickstart", type: "Paid" },
                { name: "YouTube: Motion Array – After Effects Basics", url: "https://www.youtube.com/@MotionArray", type: "Free" },
                { name: "Video Copilot – Basic Training", url: "https://www.videocopilot.net/basic/", type: "Free" }
              ],
              project: "Create a 10-second animated logo reveal for the brand you built in Week 1."
            },
            {
              day: 54,
              title: "Infographic & Data Visualization",
              hours: "9h",
              topics: [
                "Infographic types: statistical, process, timeline, geographic",
                "Data visualization: bar, pie, line, scatter plots",
                "Visual storytelling with data",
                "Illustrator + Datawrapper workflow",
                "Icon usage in data design"
              ],
              resources: [
                { name: "Datawrapper Academy", url: "https://academy.datawrapper.de/", type: "Free" },
                { name: "Information is Beautiful Awards – Inspiration", url: "https://www.informationisbeautifulawards.com/", type: "Free" },
                { name: "Storytelling with Data (Book – Cole Nussbaumer Knaflic)", url: "https://www.storytellingwithdata.com/", type: "Book" }
              ],
              project: "Design a full infographic visualizing global climate data using Illustrator."
            },
            {
              day: 55,
              title: "Editorial & Publication Design",
              hours: "9h",
              topics: [
                "Magazine layout: cover, feature spread, TOC",
                "Long-form document design in InDesign",
                "Master pages, paragraph/character styles",
                "Image-text integration",
                "Book cover design"
              ],
              resources: [
                { name: "InDesign Secrets – Advanced Tutorials", url: "https://indesignsecrets.com/", type: "Free/Paid" },
                { name: "Magazines (Book – Jeremy Leslie)", url: "https://www.amazon.com/Magazines-Jeremy-Leslie/dp/1780677871", type: "Book" }
              ],
              project: "Design a complete 8-page magazine issue including cover, TOC, feature spread, and back page."
            },
            {
              day: 56,
              title: "3D Typography & Depth Effects",
              hours: "9h",
              topics: [
                "Perspective type in Illustrator",
                "3D extrude and bevel in Illustrator/Photoshop",
                "Depth, shadow, and light simulation",
                "Foil, emboss, holographic effects in Photoshop",
                "Cinema 4D Lite (included with After Effects) intro"
              ],
              resources: [
                { name: "Maxon C4D Lite Tutorials", url: "https://www.maxon.net/tutorials", type: "Free" },
                { name: "YouTube: Dansky – 3D Typography in Illustrator", url: "https://www.youtube.com/@dansky", type: "Free" }
              ],
              project: "Create a 3D typographic poster using a word of your choice. Render with dramatic lighting."
            },
            {
              day: 57,
              title: "Advertising & Campaign Design",
              hours: "9h",
              topics: [
                "Advertising concept: big idea, headline, visual",
                "Campaign thinking: consistency across mediums",
                "Billboard, print ad, digital banner design",
                "Art direction vs copywriting dynamic",
                "Creative brief reading and response"
              ],
              resources: [
                { name: "Hey Whipple, Squeeze This (Book – Luke Sullivan)", url: "https://www.amazon.com/Hey-Whipple-Squeeze-Creating-Great/dp/1119164799", type: "Book" },
                { name: "D&AD – Award-Winning Advertising Archive", url: "https://www.dandad.org/", type: "Free" }
              ],
              project: "Design a full ad campaign (3 mediums: print, digital, billboard) for a fictional car brand."
            },
            {
              day: 58,
              title: "Portfolio Building & Presentation",
              hours: "9h",
              topics: [
                "What belongs in a design portfolio",
                "Case study writing: problem, process, solution",
                "Behance vs personal website vs PDF portfolio",
                "Figma portfolio template",
                "Personal branding as a designer"
              ],
              resources: [
                { name: "Behance Portfolio Reviews (YouTube)", url: "https://www.youtube.com/@Behance", type: "Free" },
                { name: "The Futur: Pricing & Negotiation (YouTube)", url: "https://www.youtube.com/@thefutur", type: "Free" },
                { name: "Framer – Portfolio Website Builder", url: "https://www.framer.com/", type: "Free/Paid" }
              ],
              project: "Build your Behance portfolio. Upload all Phase 1 projects with written case studies."
            },
            {
              day: 59,
              title: "Phase 1 Final Review",
              hours: "8h",
              topics: ["Review all tools", "Polish all projects", "Prepare for Phase 2 transition"],
              resources: [
                { name: "Skillshare: Graphic Design Masterclass (Jeremy Mura)", url: "https://www.skillshare.com/en/classes/graphic-design-masterclass-learn-great-design/1826142667", type: "Paid" }
              ],
              project: "FINAL: Present Phase 1 work to a peer or community. Get feedback. Revise 2 projects based on critique."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "2D Animation & Motion Design",
      color: "#7B2FBE",
      accent: "#C77DFF",
      duration: "Weeks 10–11",
      weeks: [
        {
          week: 10,
          title: "Animation Principles & After Effects Deep Dive",
          days: [
            {
              day: 60,
              title: "The 12 Principles of Animation",
              hours: "9h",
              topics: [
                "Disney's 12 principles: squash & stretch, anticipation, staging, straight ahead & pose to pose, follow through & overlapping, slow in & slow out, arc, secondary action, timing, exaggeration, solid drawing, appeal",
                "How each principle applies to digital animation",
                "Frame rates: 12fps, 24fps, 30fps, 60fps"
              ],
              resources: [
                { name: "The Illusion of Life (Book – Frank Thomas & Ollie Johnston)", url: "https://www.amazon.com/Illusion-Life-Disney-Animation/dp/0786860707", type: "Book" },
                { name: "YouTube: AlanBeckerTutorials – 12 Principles", url: "https://www.youtube.com/@AlanBeckerTutorials", type: "Free" },
                { name: "Animator's Survival Kit (Book – Richard Williams)", url: "https://www.amazon.com/Animators-Survival-Kit-Principles-Classical/dp/0571202284", type: "Book" }
              ],
              project: "Animate a bouncing ball demonstrating all 12 principles in After Effects."
            },
            {
              day: 61,
              title: "After Effects Advanced: Rigging & Puppet Tool",
              hours: "10h",
              topics: [
                "Puppet pin tool: mesh warping for character animation",
                "Null objects and parenting hierarchy",
                "Duik Bassel plugin: rigging system for characters",
                "IK/FK rigging concepts",
                "Pre-composing complex animations"
              ],
              resources: [
                { name: "Duik Bassel Official Documentation", url: "https://rxlaboratoire.github.io/DuAEF_Duik/", type: "Free" },
                { name: "School of Motion – Character Animation Bootcamp", url: "https://www.schoolofmotion.com/character-animation-bootcamp", type: "Paid" },
                { name: "YouTube: Jake In Motion – Duik Rigging Tutorial", url: "https://www.youtube.com/@JakeinMotion", type: "Free" }
              ],
              project: "Rig a character illustration and create a walk cycle using Duik Bassel."
            },
            {
              day: 62,
              title: "Adobe Animate / Toon Boom Harmony Intro",
              hours: "10h",
              topics: [
                "Vector vs bitmap animation workflows",
                "Toon Boom Harmony interface: drawing tools, timeline, node system",
                "Cut-out animation technique",
                "Drawing on model sheets",
                "Lip sync basics: Preston Blair phoneme charts"
              ],
              resources: [
                { name: "Toon Boom Harmony Official Learn", url: "https://learn.toonboom.com/", type: "Free" },
                { name: "Animation Mentor – Fundamentals (Free Preview)", url: "https://www.animationmentor.com/", type: "Paid" },
                { name: "Preston Blair's Advanced Animation (Book)", url: "https://www.amazon.com/Advanced-Animation-Preston-Blair/dp/1560100842", type: "Book" }
              ],
              project: "Animate a simple cut-out character speaking a 5-second dialogue using Toon Boom Harmony."
            },
            {
              day: 63,
              title: "Motion Graphics: Title Design",
              hours: "9h",
              topics: [
                "Kinetic typography animation",
                "Lower thirds and broadcast design",
                "Transitions: wipes, morphs, reveals",
                "Logo animation techniques",
                "Audio-reactive animation basics"
              ],
              resources: [
                { name: "Motion Design School – Typography in Motion", url: "https://motiondesign.school/", type: "Paid" },
                { name: "Envato Tuts+ – Motion Graphics Tutorials", url: "https://tutsplus.com/", type: "Free/Paid" },
                { name: "YouTube: Mt. Mograph", url: "https://www.youtube.com/@MtMograph", type: "Free" }
              ],
              project: "Design and animate a 15-second title sequence for an imaginary documentary film."
            },
            {
              day: 64,
              title: "Storyboarding & Animatic Production",
              hours: "9h",
              topics: [
                "Storyboard fundamentals: shot types, camera angles, staging",
                "Continuity editing: 180° rule, match cut, L-cut",
                "Animatic: timing storyboards to audio",
                "Story structure: 3-act, Pixar's story spine",
                "Script breakdown for animation"
              ],
              resources: [
                { name: "Storyboard That – Online Tool", url: "https://www.storyboardthat.com/", type: "Free" },
                { name: "Pixar in a Box – Khan Academy (Free)", url: "https://www.khanacademy.org/computing/pixar", type: "Free" },
                { name: "YouTube: Bloop Animation – Storyboarding for Animation", url: "https://www.youtube.com/@bloopanimation", type: "Free" }
              ],
              project: "Write a 30-second animated short concept. Produce a full storyboard and animatic."
            },
            {
              day: 65,
              title: "Character Design for Animation",
              hours: "9h",
              topics: [
                "Silhouette theory in character design",
                "Shape language: circles (friendly), triangles (dangerous), squares (strong)",
                "Design for animation: simplification, readability at small size",
                "Model sheets: front, side, 3/4 views + expressions + turnaround",
                "Color scripts for characters"
              ],
              resources: [
                { name: "Character Design References (Instagram/Website)", url: "https://characterdesignreferences.com/", type: "Free" },
                { name: "Schoolism – Designing with Color and Light (Nathan Fowkes)", url: "https://www.schoolism.com/", type: "Paid" },
                { name: "YouTube: Dong Chang – Character Design Tips", url: "https://www.youtube.com/@DongChang", type: "Free" }
              ],
              project: "Design 3 original characters with full model sheets, expression sheets, and color palettes."
            },
            {
              day: 66,
              title: "Week 4 Capstone",
              hours: "10h",
              topics: ["Combine character design + animation + storyboarding"],
              resources: [
                { name: "Vimeo Staff Picks – Animation Inspiration", url: "https://vimeo.com/channels/staffpicks", type: "Free" }
              ],
              project: "CAPSTONE: Produce a fully animated 15-second short: storyboard → character design → animate in AE or Harmony → add sound effects."
            }
          ]
        },
        {
          week: 11,
          title: "Frame-by-Frame & Advanced 2D",
          days: [
            {
              day: 67,
              title: "Frame-by-Frame Animation",
              hours: "10h",
              topics: [
                "Onion skinning technique",
                "Timing and spacing charts",
                "Rough animation → cleaned up animation → in-betweening",
                "Walk cycle, run cycle, jump",
                "Hand-drawn digital animation in Procreate/Krita"
              ],
              resources: [
                { name: "Krita Animation Docs (Free Software)", url: "https://docs.krita.org/en/", type: "Free" },
                { name: "The Animator's Survival Kit (Richard Williams)", url: "https://www.amazon.com/Animators-Survival-Kit-Principles-Classical/dp/0571202284", type: "Book" }
              ],
              project: "Create a hand-drawn walk cycle (8 frames) and run cycle (8 frames) for your character."
            },
            {
              day: 68,
              title: "Advanced Lip Sync & Facial Animation",
              hours: "9h",
              topics: [
                "Phoneme charts: A/I, E, O, U, etc.",
                "Dialogue breakdown: marking frames",
                "Facial muscle animation: brows, eyes, mouth",
                "Emotional acting through subtle facial movement",
                "Auto lip sync tools in Animate/Harmony"
              ],
              resources: [
                { name: "Toon Boom Learn: Lip Sync Module", url: "https://learn.toonboom.com/", type: "Free" },
                { name: "YouTube: SBW Creations – Lip Sync Tutorial", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Animate a 10-second dialogue clip with full facial animation and lip sync."
            },
            {
              day: 69,
              title: "Background Design & Environments",
              hours: "9h",
              topics: [
                "Background styles: flat, painterly, textured",
                "Perspective in backgrounds: 1-point, 2-point, 3-point",
                "Color scripting backgrounds to support character mood",
                "Parallax layers for animation depth",
                "Photoshop/Krita background painting techniques"
              ],
              resources: [
                { name: "Schoolism – Environment Design (Dice Tsutsumi)", url: "https://www.schoolism.com/", type: "Paid" },
                { name: "YouTube: Sinix Design – Environment Painting", url: "https://www.youtube.com/@sinixdesign", type: "Free" }
              ],
              project: "Paint 3 production-quality background layouts for your animated short."
            },
            {
              day: 70,
              title: "Compositing in After Effects",
              hours: "10h",
              topics: [
                "Compositing animation elements + backgrounds",
                "Depth and parallax scrolling",
                "Color grading animated content",
                "Adding camera moves: pan, tilt, zoom, shake",
                "Visual effects overlays: particles, light leaks, glows"
              ],
              resources: [
                { name: "Red Giant Universe – Free Plugins", url: "https://www.maxon.net/red-giant/universe", type: "Free/Paid" },
                { name: "Video Copilot – Compositing Tutorials", url: "https://www.videocopilot.net/", type: "Free" }
              ],
              project: "Composite your animated characters onto your painted backgrounds with depth and camera movement."
            },
            {
              day: 71,
              title: "Sound Design for Animation",
              hours: "8h",
              topics: [
                "Sound effects: finding and applying Foley",
                "Music selection and timing",
                "Audio editing in Audacity or Premiere",
                "Syncing audio to animation",
                "Export codecs for animation: ProRes, H.264, GIF"
              ],
              resources: [
                { name: "Freesound.org – Free Sound Library", url: "https://freesound.org/", type: "Free" },
                { name: "YouTube: SoundWorks Collection – Sound Design", url: "https://www.youtube.com/@SoundWorksCollection", type: "Free" },
                { name: "Audacity Documentation", url: "https://support.audacityteam.org/", type: "Free" }
              ],
              project: "Complete sound design for your 15-second animated short. Export in 3 formats."
            },
            {
              day: 72,
              title: "Visual Development & Concept Art",
              hours: "9h",
              topics: [
                "Visual development pipeline for animation",
                "Mood boards and art direction documents",
                "Color scripts for full productions",
                "Concept art to production art pipeline",
                "Thumbnailing and ideation techniques"
              ],
              resources: [
                { name: "Art of [Pixar/Ghibli/etc.] Books (Any)", url: "https://www.amazon.com/", type: "Book" },
                { name: "Schoolism – Pictorial Composition (Neil Richards)", url: "https://www.schoolism.com/", type: "Paid" }
              ],
              project: "Produce a full visual development package for an original animated short idea (5 pages)."
            },
            {
              day: 73,
              title: "Phase 2 Mid-Review",
              hours: "8h",
              topics: ["Review animation work", "Upload to portfolio", "Prep for VFX phase"],
              resources: [
                { name: "Animation Career Review – Industry Insight", url: "https://www.animationcareerreview.com/", type: "Free" }
              ],
              project: "Upload all animation work to ArtStation and Behance with process breakdown and case study."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "VFX & Compositing",
      color: "#0A9396",
      accent: "#94D2BD",
      duration: "Week 12",
      weeks: [
        {
          week: 12,
          title: "VFX Fundamentals & Nuke/After Effects",
          days: [
            {
              day: 74,
              title: "VFX Pipeline & Industry Overview",
              hours: "8h",
              topics: [
                "VFX production pipeline: pre-production, principal photography, post-production",
                "Departments: compositing, matchmove, rotoscoping, matte painting, simulation, lighting",
                "Software overview: Nuke, Houdini, Maya, Nuke, DaVinci Resolve",
                "VFX breakdown analysis: deconstructing shots from films"
              ],
              resources: [
                { name: "Corridor Crew – VFX Artists React (YouTube)", url: "https://www.youtube.com/@CorridorCrew", type: "Free" },
                { name: "fxguide – Industry Breakdowns", url: "https://www.fxguide.com/", type: "Free" },
                { name: "CGMA – VFX Overview Course", url: "https://www.cgmasteracademy.com/", type: "Paid" }
              ],
              project: "Analyze and write a 500-word breakdown of a VFX shot from a major film."
            },
            {
              day: 75,
              title: "Green Screen & Keying",
              hours: "9h",
              topics: [
                "Chroma key theory: color difference keying",
                "After Effects Keylight plugin: spill suppression, matte refinement",
                "Nuke Primatte and IBK keyer",
                "Edge treatment and hair/fine detail keying",
                "Lighting considerations when shooting green screen"
              ],
              resources: [
                { name: "YouTube: WorkbenchFX – Keying in After Effects", url: "https://www.youtube.com/@WorkbenchFX", type: "Free" },
                { name: "Nuke Non-Commercial (Free Download)", url: "https://www.foundry.com/products/nuke-family/nuke", type: "Free" }
              ],
              project: "Key a challenging green screen footage (hair + motion blur) and composite into a new environment."
            },
            {
              day: 76,
              title: "Rotoscoping & Masking",
              hours: "10h",
              topics: [
                "Roto principles: shape management, feathering, motion blur",
                "After Effects roto brush and refine edges",
                "Silhouette FX for professional roto",
                "Wire removal and paint fixes",
                "Batch roto workflow for efficiency"
              ],
              resources: [
                { name: "Silhouette FX Tutorials – Boris FX", url: "https://borisfx.com/training/", type: "Free" },
                { name: "After Effects Roto Brush Tutorial – Adobe", url: "https://helpx.adobe.com/after-effects/using/roto-brush-refine-edge.html", type: "Free" }
              ],
              project: "Roto a complex scene: person with flowing hair on a busy background. Replace background entirely."
            },
            {
              day: 77,
              title: "Tracking & Matchmoving",
              hours: "9h",
              topics: [
                "2D point tracking in After Effects",
                "Planar tracking with Mocha Pro",
                "3D camera tracking: solving camera movement",
                "PFTrack / Syntheyes intro",
                "Integrating 3D elements into live footage"
              ],
              resources: [
                { name: "Mocha Pro Tutorials – Boris FX", url: "https://borisfx.com/training/", type: "Free" },
                { name: "YouTube: Workbench – Camera Tracking AE", url: "https://www.youtube.com/@WorkbenchFX", type: "Free" }
              ],
              project: "Track a handheld camera shot and integrate a 3D text element that appears on a surface."
            },
            {
              day: 78,
              title: "Matte Painting & Environment Extension",
              hours: "10h",
              topics: [
                "Matte painting history and evolution",
                "Photobashing techniques in Photoshop",
                "Perspective matching and seamless integration",
                "Digital matte painting: painting over photo base",
                "Projection: applying matte paint to 3D geometry"
              ],
              resources: [
                { name: "Gnomon Workshop – Matte Painting", url: "https://www.gnomonworkshop.com/", type: "Paid" },
                { name: "YouTube: Steve Burg – Matte Painting Demo", url: "https://www.youtube.com/", type: "Free" },
                { name: "Dylan Cole Studio – Matte Painting Tutorials", url: "https://www.dylancole.com/", type: "Paid" }
              ],
              project: "Create a matte painting extending an existing location photo into a fantastical environment."
            },
            {
              day: 79,
              title: "Particle & Simulation Systems",
              hours: "9h",
              topics: [
                "After Effects Particular plugin (Trapcode)",
                "Fire, smoke, dust, sparks simulations",
                "Houdini intro: node-based procedural FX",
                "Cloth and fluid simulations overview",
                "Rendering and compositing simulations"
              ],
              resources: [
                { name: "SideFX Houdini Apprentice (Free)", url: "https://www.sidefx.com/products/houdini-apprentice/", type: "Free" },
                { name: "Trapcode Particular Tutorials", url: "https://www.maxon.net/trapcode", type: "Paid" },
                { name: "YouTube: CGVFX – Houdini for Beginners", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Create a 5-second VFX shot: a magical explosion or fire effect composited onto live footage."
            },
            {
              day: 80,
              title: "Week 6 VFX Capstone",
              hours: "10h",
              topics: ["Combine all VFX skills into one complete shot"],
              resources: [
                { name: "VFX Breakdown Tutorial – Corridor Digital", url: "https://www.youtube.com/@CorridorDigital", type: "Free" }
              ],
              project: "CAPSTONE: Create a complete 10-second VFX shot from scratch: keying + tracking + matte paint + particle effects + color grade."
            }
          ]
        }
      ]
    },
    {
      id: 5,
      phase: "Phase 5",
      title: "3D Animation & Advanced Production",
      color: "#E63946",
      accent: "#FF9F1C",
      duration: "Weeks 13–16",
      weeks: [
        {
          week: 13,
          title: "3D Foundations: Maya & Blender",
          days: [
            {
              day: 81,
              title: "3D Software & Interface Mastery",
              hours: "10h",
              topics: [
                "3D coordinate systems: X, Y, Z axes",
                "Maya interface: viewports, channel box, outliner, attribute editor",
                "Blender 3.x interface: viewport, outliner, properties",
                "Navigation: orbit, pan, dolly",
                "Basic polygon modeling: extrude, bevel, loop cut, bridge"
              ],
              resources: [
                { name: "Autodesk Maya Learning Channel (YouTube)", url: "https://www.youtube.com/@AutodeskMaya", type: "Free" },
                { name: "Blender Guru – Beginner Donut Tutorial", url: "https://www.youtube.com/@blenderguru", type: "Free" },
                { name: "Maya for Beginners – Udemy (Nexttut Education)", url: "https://www.udemy.com/course/maya-for-beginners-complete-guide/", type: "Paid" }
              ],
              project: "Model a realistic coffee mug in both Maya and Blender. Render with simple lighting."
            },
            {
              day: 82,
              title: "Polygon Modeling Fundamentals",
              hours: "10h",
              topics: [
                "Hard surface modeling: topology theory, edge flow",
                "Subdivision surfaces: control loops, creasing",
                "Box modeling vs polygon-by-polygon",
                "Mirror modeling for symmetrical objects",
                "N-gons vs quads vs tris: best practices"
              ],
              resources: [
                { name: "CG Cookie – Blender Modeling Fundamentals", url: "https://cgcookie.com/", type: "Paid" },
                { name: "YouTube: Arrimus 3D – Maya Hard Surface", url: "https://www.youtube.com/@Arrimus3D", type: "Free" }
              ],
              project: "Model a game-ready prop: a sci-fi helmet or weapon with clean topology."
            },
            {
              day: 83,
              title: "UV Mapping & Texturing",
              hours: "9h",
              topics: [
                "UV unwrapping: seams, cutting, unfolding",
                "Texel density and UV layout optimization",
                "Texture painting in Substance Painter",
                "PBR materials: Albedo, Normal, Roughness, Metallic, AO",
                "UDIM workflow for film-quality assets"
              ],
              resources: [
                { name: "Substance Painter Official Tutorials – Adobe", url: "https://helpx.adobe.com/substance-3d-painter/tutorials.html", type: "Free" },
                { name: "YouTube: Stylized Station – Substance Painter", url: "https://www.youtube.com/@StylizedStation", type: "Free" }
              ],
              project: "UV map and fully texture your prop in Substance Painter with PBR materials."
            },
            {
              day: 84,
              title: "Rigging & Skinning",
              hours: "10h",
              topics: [
                "Skeleton hierarchy in Maya",
                "Joint placement for anatomically correct rigs",
                "Skinning: smooth bind, rigid bind",
                "Weight painting: corrective blendshapes",
                "Control curves and rig UI",
                "IK/FK switching"
              ],
              resources: [
                { name: "Rigging Dojo – Free Resources", url: "https://www.riggingdojo.com/", type: "Free/Paid" },
                { name: "YouTube: Chris Lesage – Maya Rigging", url: "https://www.youtube.com/@chrislesage", type: "Free" }
              ],
              project: "Rig a biped character with full body controls, IK/FK legs and arms, and blend shapes for expressions."
            },
            {
              day: 85,
              title: "3D Character Animation",
              hours: "10h",
              topics: [
                "Graph editor mastery: tangents, curves",
                "Blocking: pose-to-pose animation",
                "Spline pass: arc cleanup, timing refinement",
                "Overlap, follow-through, secondary motion",
                "Locomotion cycles: walk, run, sneak"
              ],
              resources: [
                { name: "Animation Mentor – Free Webinars", url: "https://www.animationmentor.com/", type: "Free/Paid" },
                { name: "11 Second Club – Monthly Competition", url: "https://www.11secondclub.com/", type: "Free" },
                { name: "YouTube: Sir Wade Neistadt – 3D Animation Tips", url: "https://www.youtube.com/@SirWadeNeistadt", type: "Free" }
              ],
              project: "Animate a full body weight lift + throw sequence demonstrating all 12 principles in 3D."
            },
            {
              day: 86,
              title: "Lighting, Shading & Rendering",
              hours: "9h",
              topics: [
                "Light types: directional, point, spot, area, HDRI dome",
                "Three-point lighting setup",
                "Arnold/V-Ray/Redshift render engines",
                "Shader networks: SSS, glass, metal, fabric",
                "Render passes: beauty, diffuse, specular, shadow, AO, depth",
                "Render farm concepts"
              ],
              resources: [
                { name: "Arnold Renderer Tutorials – Autodesk", url: "https://help.autodesk.com/view/ARNOL/ENU/", type: "Free" },
                { name: "Chaos Group V-Ray Tutorials", url: "https://www.chaos.com/vray/tutorials", type: "Free" }
              ],
              project: "Light and render your textured prop in 3 different lighting moods using Arnold or V-Ray."
            },
            {
              day: 87,
              title: "Week 7 3D Capstone",
              hours: "10h",
              topics: ["Full 3D production shot"],
              resources: [
                { name: "ArtStation – 3D Character Portfolio Inspiration", url: "https://www.artstation.com/channels/character", type: "Free" }
              ],
              project: "CAPSTONE: Model → UV → Texture → Rig → Animate → Render a 10-second 3D character animation shot."
            }
          ]
        },
        {
          week: 14,
          title: "Advanced 3D: Dynamics, FX & Film Production",
          days: [
            {
              day: 88,
              title: "Dynamics & Simulations in Houdini",
              hours: "10h",
              topics: [
                "Houdini SOPs: geometry nodes",
                "Rigid body dynamics (RBD): destruction simulations",
                "Pyro FX: fire and smoke",
                "FLIP fluids: water and liquid simulations",
                "Vellum: cloth, hair, soft body"
              ],
              resources: [
                { name: "SideFX Houdini Tutorials – Official", url: "https://www.sidefx.com/tutorials/", type: "Free" },
                { name: "Rebelway – Intro to Houdini FX", url: "https://www.rebelway.net/", type: "Paid" },
                { name: "YouTube: CGVFX – Houdini FX", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Create a building destruction simulation with fire and debris using Houdini."
            },
            {
              day: 89,
              title: "Creature FX & Hair/Fur",
              hours: "9h",
              topics: [
                "XGen hair system in Maya",
                "Grooming techniques: guides, clumping, noise",
                "Fur for animals and creatures",
                "Cloth simulation in Maya nCloth",
                "Cache workflow for dynamics"
              ],
              resources: [
                { name: "YouTube: Lesterbanks – XGen Tutorials", url: "https://lesterbanks.com/", type: "Free" }
              ],
              project: "Groom a realistic animal character (dog or lion) with XGen hair in Maya."
            },
            {
              day: 90,
              title: "Compositing in Nuke",
              hours: "10h",
              topics: [
                "Nuke node graph: essential nodes",
                "Multi-pass compositing: combining render passes",
                "Color grading in Nuke: ACES workflow",
                "Lens effects: depth of field, motion blur, chromatic aberration",
                "Nuke Smart Vectors for stabilization"
              ],
              resources: [
                { name: "Foundry Nuke Tutorials – Official", url: "https://learn.foundry.com/nuke", type: "Free" },
                { name: "YouTube: CompositingMentor", url: "https://www.youtube.com/@CompositingMentor", type: "Free" }
              ],
              project: "Composite a CG character into live footage using multi-pass renders in Nuke."
            },
            {
              day: 91,
              title: "Photorealistic Environments & Archviz",
              hours: "9h",
              topics: [
                "Procedural texturing in Houdini or Blender",
                "Terrain generation: World Machine, Houdini",
                "Forest/vegetation: SpeedTree, Houdini scatter",
                "Sky and atmosphere: HDRI, volumetric clouds",
                "Archviz rendering pipeline"
              ],
              resources: [
                { name: "SpeedTree Cinema – Official Tutorials", url: "https://store.speedtree.com/", type: "Paid" },
                { name: "Blender Guru – Photorealistic Rendering", url: "https://www.youtube.com/@blenderguru", type: "Free" }
              ],
              project: "Create a photorealistic exterior environment: forest scene or urban street with volumetric light."
            },
            {
              day: 92,
              title: "Pipeline & Production Management",
              hours: "8h",
              topics: [
                "3D production pipeline: pre-production to delivery",
                "File management and naming conventions",
                "Asset management systems: ShotGrid/Flow Production Tracking",
                "Version control in production",
                "Collaboration in studio pipeline"
              ],
              resources: [
                { name: "Autodesk ShotGrid Free Trial", url: "https://www.autodesk.com/products/flow-production-tracking/overview", type: "Free" },
                { name: "The VES Handbook of Visual Effects (Book)", url: "https://www.amazon.com/VES-Handbook-Visual-Effects/dp/0415838150", type: "Book" }
              ],
              project: "Document your 3D production workflow. Set up a proper file naming and folder structure system."
            },
            {
              day: 93,
              title: "Demo Reel Strategy & Production",
              hours: "9h",
              topics: [
                "Demo reel structure: best work first, 60–90 seconds max",
                "Breakdown reels: side-by-side wireframe/final",
                "Music selection and timing to reel",
                "ArtStation pro portfolio setup",
                "LinkedIn for VFX artists"
              ],
              resources: [
                { name: "YouTube: J Hill – Demo Reel Tips", url: "https://www.youtube.com/", type: "Free" },
                { name: "ArtStation Learning – Portfolio Building", url: "https://www.artstation.com/learning/", type: "Free" }
              ],
              project: "Edit your demo reel. Include all major work from Phase 3 and 4 with breakdown slides."
            },
            {
              day: 94,
              title: "Phase 4 Mid Capstone",
              hours: "10h",
              topics: ["Full film-quality 3D shot"],
              resources: [
                { name: "Gnomon Workshop – Film Production Tutorials", url: "https://www.gnomonworkshop.com/", type: "Paid" }
              ],
              project: "Produce a 20-second 3D animated film shot: character + environment + lighting + FX + compositing."
            }
          ]
        },
        {
          week: 15,
          title: "Advanced 3D Animation & Final Production",
          days: [
            {
              day: 95,
              title: "Performance Animation & Facial Motion Capture",
              hours: "9h",
              topics: [
                "Facial rigging: blendshapes for FACS",
                "Motion capture data cleanup in Maya",
                "Performance capture pipeline",
                "Acting for animators: Stanislavski method in animation",
                "Emotional acting through body language and timing"
              ],
              resources: [
                { name: "Acting for Animators (Book – Ed Hooks)", url: "https://www.amazon.com/Acting-Animators-Ed-Hooks/dp/0415564638", type: "Book" },
                { name: "YouTube: Victor Navone – Acting in Animation", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Animate a 15-second emotional dialogue performance: character must convey 2 contrasting emotions."
            },
            {
              day: 96,
              title: "Cinematic Camera Work in 3D",
              hours: "9h",
              topics: [
                "Camera lenses: focal length, depth of field in 3D",
                "Cinematography rules applied to 3D: rule of thirds, Dutch angle",
                "Camera animation: dolly, crane, steadicam simulation",
                "Lens distortion and film grain for realism",
                "Storyboard to 3D layout blocking"
              ],
              resources: [
                { name: "The Cinematography of [Any Film] – YouTube Breakdown", url: "https://www.youtube.com/", type: "Free" },
                { name: "Lessons from the Screenplay – YouTube", url: "https://www.youtube.com/@LessonsfromtheScreenplay", type: "Free" }
              ],
              project: "Re-create a famous film scene in 3D focusing on cinematic camera work and composition."
            },
            {
              day: 97,
              title: "Photorealistic Character Rendering",
              hours: "10h",
              topics: [
                "Skin shading: SSS in Arnold/V-Ray",
                "Eye rendering: cornea, iris, sclera layers",
                "Grooming realistic hair with XGen or Ornatrix",
                "Cloth and costume shading",
                "Look development process"
              ],
              resources: [
                { name: "Gnomon Workshop – Look Development", url: "https://www.gnomonworkshop.com/", type: "Paid" },
                { name: "YouTube: Mike Hermes – Hyper Realistic Character", url: "https://www.youtube.com/@MikeHermes", type: "Free" }
              ],
              project: "Create a photorealistic 3D portrait render. Focus on skin, hair, and eye believability."
            },
            {
              day: 98,
              title: "Advanced VFX Integration",
              hours: "10h",
              topics: [
                "CG/live action integration: lighting matching",
                "Digital doubles",
                "Previz to final render pipeline",
                "ACES color management pipeline",
                "Final color grading in DaVinci Resolve"
              ],
              resources: [
                { name: "DaVinci Resolve Free + Official Training", url: "https://www.blackmagicdesign.com/products/davinciresolve/training", type: "Free" }
              ],
              project: "Final VFX shot: integrate a 3D character or creature into live action footage. Full pipeline."
            },
            {
              day: 99,
              title: "Final Project Pre-Production",
              hours: "9h",
              topics: [
                "Concept development for final film",
                "Full storyboard and animatic",
                "Asset list and schedule",
                "Style guide for the project"
              ],
              resources: [
                { name: "Shot Deck – Film Reference Tool", url: "https://shotdeck.com/", type: "Paid" }
              ],
              project: "Lock script, storyboard, and complete asset list for your 30-second final film."
            },
            {
              day: 100,
              title: "Final Project Production Day 1",
              hours: "12h",
              topics: ["Model and texture all assets for final film"],
              resources: [],
              project: "Complete: all environments, characters, and props modeled + textured for final film."
            },
            {
              day: 101,
              title: "Final Project Production Day 2",
              hours: "12h",
              topics: ["Rig, animate, FX for final film"],
              resources: [],
              project: "Complete: rigging + animation + FX + lighting for all shots in final film."
            }
          ]
        },
        {
          week: 16,
          title: "Final Film Polish & Delivery",
          days: [
            {
              day: 102,
              title: "Rendering & Compositing Final Film",
              hours: "12h",
              topics: ["Render all shots", "Composite in Nuke", "Color grade in DaVinci Resolve"],
              resources: [],
              project: "All shots rendered and composited."
            },
            {
              day: 103,
              title: "Sound Design & Music Final Film",
              hours: "10h",
              topics: ["Full sound design", "Music composition or licensing", "Final audio mix"],
              resources: [
                { name: "Epidemic Sound – Royalty Free Music", url: "https://www.epidemicsound.com/", type: "Paid" },
                { name: "Freesound.org", url: "https://freesound.org/", type: "Free" }
              ],
              project: "Complete audio for entire film. Export final edit."
            },
            {
              day: 104,
              title: "Final Film Review & Polish",
              hours: "10h",
              topics: ["Peer review", "Final adjustments", "Export in multiple formats"],
              resources: [],
              project: "Screen final film to peers. Implement critical feedback."
            },
            {
              day: 105,
              title: "Portfolio Master Strategy",
              hours: "9h",
              topics: [
                "ArtStation Pro optimization",
                "IMDb for animation credits",
                "LinkedIn for industry networking",
                "Cold emailing studios strategy",
                "Resume and cover letter for animation/VFX"
              ],
              resources: [
                { name: "AICP – Industry Standard Portfolio Advice", url: "https://www.aicp.com/", type: "Free" },
                { name: "Animation Career Review – Job Hunting Guide", url: "https://www.animationcareerreview.com/", type: "Free" }
              ],
              project: "Complete ArtStation portfolio, updated resume, and 5 studio cold email drafts."
            },
            {
              day: 106,
              title: "Festival Submission & Distribution",
              hours: "8h",
              topics: [
                "Animation festival circuit: Annecy, Ottawa, Siggraph",
                "How to submit to Vimeo Staff Picks",
                "YouTube monetization for animators",
                "Social media content strategy for creatives"
              ],
              resources: [
                { name: "FilmFreeway – Festival Submission Platform", url: "https://filmfreeway.com/", type: "Free" },
                { name: "Annecy International Animation Film Festival", url: "https://www.annecy.org/", type: "Free" }
              ],
              project: "Submit your film to 3 festivals on FilmFreeway. Upload to Vimeo with proper description."
            },
            {
              day: 107,
              title: "Freelancing & Business of Design",
              hours: "8h",
              topics: [
                "Setting rates: hourly vs project-based",
                "Contracts: kill fees, revisions, IP ownership",
                "Client communication and project management",
                "Tax basics for freelancers",
                "Platforms: Upwork, 99designs, Toptal, direct outreach"
              ],
              resources: [
                { name: "The Futur – Business of Design (YouTube)", url: "https://www.youtube.com/@thefutur", type: "Free" },
                { name: "Blair Enns – Win Without Pitching Manifesto", url: "https://www.winwithoutpitching.com/", type: "Free" }
              ],
              project: "Write your freelance rate card, client contract template, and invoice template."
            },
            {
              day: 108,
              title: "GRADUATION: Final Presentation",
              hours: "8h",
              topics: ["Present all work", "Reflect on learning", "Set 6-month post-training goals"],
              resources: [],
              project: "FINAL GRADUATION: Present your complete portfolio (graphic design, motion, VFX, 3D, final film) to a live audience or online community. Celebrate — you have compressed 3.5 years of training into 3 months."
            }
          ]
        }
      ]
    },
    {
      id: 6,
      phase: "Phase 6",
      title: "Data Analysis & Visualization",
      color: "#F4A261",
      accent: "#FFD166",
      duration: "Weeks 17–22",
      weeks: [
        {
          week: 17,
          title: "Data Analysis Foundations",
          days: [
            {
              day: 109,
              title: "The Data Analysis Mindset & Python Stack",
              hours: "9h",
              topics: [
                "What data analysts actually do: ask questions, find patterns, tell stories",
                "The full analyst stack: Python, SQL, Excel, Tableau/PowerBI, stats",
                "Jupyter Lab setup: notebooks, extensions, kernels, magic commands",
                "Data types in analysis: nominal, ordinal, interval, ratio",
                "Exploratory Data Analysis (EDA) framework: shape, describe, info, value_counts",
                "The data analysis workflow: question → data → clean → analyze → visualize → communicate"
              ],
              resources: [
                { name: "Kaggle – Data Analysis Learning Path (Free)", url: "https://www.kaggle.com/learn", type: "Free" },
                { name: "Python for Data Analysis (Book – Wes McKinney, pandas creator)", url: "https://wesmckinney.com/book/", type: "Free" },
                { name: "YouTube: Alex The Analyst – Data Analyst Bootcamp", url: "https://www.youtube.com/@AlexTheAnalyst", type: "Free" }
              ],
              project: "Perform full EDA on the Titanic dataset: shape, nulls, distributions, correlations. Write 10 observations."
            },
            {
              day: 110,
              title: "Pandas Power User: Advanced Data Manipulation",
              hours: "10h",
              topics: [
                "MultiIndex: hierarchical indexing, xs, swaplevel, stack, unstack",
                "Advanced groupby: transform, apply, agg with multiple functions, named aggregation",
                "Window functions: rolling, expanding, ewm — moving averages, cumulative stats",
                "Merging strategies: merge, join, concat, compare — understanding keys and indicators",
                "String operations: str.extract, str.split, str.contains, regex in pandas",
                "Categorical dtype: memory optimization, ordered categories, CategoricalIndex",
                "Performance: vectorization vs apply vs iterrows — when each is appropriate"
              ],
              resources: [
                { name: "Pandas Official User Guide", url: "https://pandas.pydata.org/docs/user_guide/", type: "Free" },
                { name: "YouTube: Rob Mulla – Advanced Pandas", url: "https://www.youtube.com/@robmulla", type: "Free" }
              ],
              project: "Analyze a retail sales dataset: revenue by region/product/time, rolling 30-day averages, YoY growth, cohort retention."
            },
            {
              day: 111,
              title: "Statistics for Data Analysis",
              hours: "10h",
              topics: [
                "Descriptive stats: mean, median, mode, variance, std dev, skewness, kurtosis",
                "Probability distributions: normal, binomial, Poisson, uniform, exponential",
                "Central limit theorem: why it matters for analysis",
                "Hypothesis testing: null/alternative hypothesis, p-value, significance level (α)",
                "T-tests: one-sample, two-sample, paired — when to use each",
                "Chi-square test: testing independence of categorical variables",
                "ANOVA: comparing means across 3+ groups",
                "Confidence intervals: interpretation and construction"
              ],
              resources: [
                { name: "StatQuest with Josh Starmer (YouTube) – Best Stats Channel", url: "https://www.youtube.com/@statquest", type: "Free" },
                { name: "Think Stats (Free Book – Allen Downey)", url: "https://greenteapress.com/wp/think-stats-2e/", type: "Free" },
                { name: "scipy.stats Official Docs", url: "https://docs.scipy.org/doc/scipy/reference/stats.html", type: "Free" }
              ],
              project: "A/B test analysis: given two website variants and conversion data, determine statistical significance. Write executive summary."
            },
            {
              day: 112,
              title: "SQL for Analysis: Advanced Queries & Window Functions",
              hours: "10h",
              topics: [
                "Window functions deep dive: RANK, DENSE_RANK, ROW_NUMBER, NTILE",
                "LAG/LEAD: comparing rows with previous/next — MoM, WoW analysis",
                "Running totals and moving averages with window frames",
                "CTEs and recursive CTEs: organizational hierarchies, date sequences",
                "Pivoting data in SQL: CASE WHEN for cross-tabulation",
                "Funnel analysis in SQL: conversion rate at each step",
                "Cohort analysis: user retention by signup date"
              ],
              resources: [
                { name: "Mode Analytics SQL Tutorial – Advanced", url: "https://mode.com/sql-tutorial/sql-window-functions/", type: "Free" },
                { name: "StrataScratch – Real Interview SQL Problems", url: "https://www.stratascratch.com/", type: "Free/Paid" },
                { name: "YouTube: Luke Barousse – SQL for Data Analytics", url: "https://www.youtube.com/@LukeBarousse", type: "Free" }
              ],
              project: "Analyze an e-commerce database: build funnel analysis, cohort retention matrix, and revenue attribution queries."
            },
            {
              day: 113,
              title: "Data Cleaning & Quality Engineering",
              hours: "9h",
              topics: [
                "Missing data: MCAR, MAR, MNAR — imputation strategies (mean, median, KNN, MICE)",
                "Outlier detection: IQR method, Z-score, Isolation Forest, Local Outlier Factor",
                "Data type issues: mixed types, inconsistent formatting, encoding problems",
                "Deduplication: fuzzy matching with fuzzywuzzy/rapidfuzz",
                "Data validation: Great Expectations library for data quality checks",
                "Standardization vs normalization: when to use Min-Max vs Z-score"
              ],
              resources: [
                { name: "Great Expectations Official Docs", url: "https://docs.greatexpectations.io/", type: "Free" },
                { name: "YouTube: Rob Mulla – Data Cleaning Python", url: "https://www.youtube.com/@robmulla", type: "Free" }
              ],
              project: "Take a deliberately messy real-world dataset (find on Kaggle). Clean it fully. Document every decision made."
            },
            {
              day: 114,
              title: "Excel & Google Sheets: Analyst Toolkit",
              hours: "8h",
              topics: [
                "Power Query: import, transform, and merge data without code",
                "Pivot tables: grouping, calculated fields, slicers, timelines",
                "Advanced formulas: INDEX/MATCH, XLOOKUP, FILTER, UNIQUE, SEQUENCE, LAMBDA",
                "Dynamic arrays: spill ranges, # operator",
                "Data validation, conditional formatting, named ranges",
                "Excel for dashboards: charts linked to pivot tables, form controls"
              ],
              resources: [
                { name: "ExcelJet – Excel Formula Examples", url: "https://exceljet.net/", type: "Free" },
                { name: "YouTube: Leila Gharani – Advanced Excel", url: "https://www.youtube.com/@LeilaGharani", type: "Free" }
              ],
              project: "Build a fully interactive Excel dashboard for sales analysis: slicers, pivot charts, KPI cards, sparklines."
            },
            {
              day: 115,
              title: "Week 21 Capstone: Full EDA Report",
              hours: "10h",
              topics: ["End-to-end data analysis project"],
              resources: [
                { name: "Kaggle Datasets – Find Your Dataset", url: "https://www.kaggle.com/datasets", type: "Free" }
              ],
              project: "CAPSTONE: Choose a real Kaggle dataset. Deliver a full EDA report in Jupyter: 20+ visualizations, statistical tests, business recommendations, and executive summary."
            }
          ]
        },
        {
          week: 18,
          title: "Data Visualization: Matplotlib, Seaborn & Plotly",
          days: [
            {
              day: 116,
              title: "Matplotlib: Complete Mastery",
              hours: "9h",
              topics: [
                "Figure/axes architecture: plt.subplots, fig.add_subplot, GridSpec",
                "Plot types: line, scatter, bar, barh, hist, boxplot, violin, pie, imshow, contour",
                "Axes customization: xlim, ylim, xticks, yticks, set_xscale, invert_yaxis",
                "Text: title, xlabel, ylabel, annotate, text, legend loc and formatting",
                "Styles: plt.style.use, rcParams, seaborn style context",
                "Subplots: tight_layout, constrained_layout, shared axes, broken axes",
                "Saving: savefig at 300dpi, SVG for web, PDF for print"
              ],
              resources: [
                { name: "Matplotlib Official Gallery + Tutorials", url: "https://matplotlib.org/stable/gallery/", type: "Free" },
                { name: "Scientific Visualization: Python + Matplotlib (Free Book – Nicolas Rougier)", url: "https://github.com/rougier/scientific-visualization-book", type: "Free" }
              ],
              project: "Recreate 5 famous data visualizations (NYT, FiveThirtyEight, Economist style) using pure Matplotlib."
            },
            {
              day: 117,
              title: "Seaborn: Statistical Visualization",
              hours: "9h",
              topics: [
                "Seaborn philosophy: tidy data + statistical plotting",
                "Distribution plots: histplot, kdeplot, ecdfplot, rugplot",
                "Categorical plots: boxplot, violinplot, stripplot, swarmplot, barplot, pointplot",
                "Relational plots: scatterplot, lineplot — hue, size, style semantics",
                "Matrix plots: heatmap, clustermap — correlation matrices, confusion matrices",
                "FacetGrid and PairGrid: small multiples for multi-variable exploration",
                "Regression plots: lmplot, residplot — visualizing model fit"
              ],
              resources: [
                { name: "Seaborn Official Tutorial", url: "https://seaborn.pydata.org/tutorial.html", type: "Free" },
                { name: "YouTube: Keith Galli – Seaborn Tutorial", url: "https://www.youtube.com/@KeithGalli", type: "Free" }
              ],
              project: "Build a comprehensive statistical analysis visual report for a health dataset: distributions, correlations, group comparisons."
            },
            {
              day: 118,
              title: "Plotly & Plotly Express: Interactive Visualizations",
              hours: "9h",
              topics: [
                "Plotly Express: one-liner interactive charts — px.scatter, px.bar, px.line, px.choropleth",
                "Plotly Graph Objects: full control — go.Figure, go.Scatter, go.Heatmap",
                "Interactivity: hover templates, click events, range sliders, animation frames",
                "3D charts: scatter3d, surface, mesh3d for volumetric data",
                "Maps: choropleth, scatter_mapbox, density_mapbox — geographic data",
                "Animation: animated scatter over time — bubble charts with play button"
              ],
              resources: [
                { name: "Plotly Python Official Docs", url: "https://plotly.com/python/", type: "Free" },
                { name: "YouTube: Charming Data – Plotly & Dash", url: "https://www.youtube.com/@CharmingData", type: "Free" }
              ],
              project: "Build an interactive global COVID-19 dashboard with animated time slider, choropleth map, and drill-down charts."
            },
            {
              day: 119,
              title: "Dash & Streamlit: Data Apps",
              hours: "10h",
              topics: [
                "Streamlit: st.write, st.dataframe, st.plotly_chart, st.sidebar, st.columns",
                "Streamlit widgets: slider, selectbox, multiselect, date_input, file_uploader",
                "Streamlit session state: persisting data across reruns",
                "Dash: layout (html.Div, dcc.Graph, dcc.Dropdown), callbacks, multi-page",
                "Dash callback pattern: Input, Output, State — reactive data apps",
                "Deploying data apps: Streamlit Cloud (free), Heroku, Railway"
              ],
              resources: [
                { name: "Streamlit Official Docs", url: "https://docs.streamlit.io/", type: "Free" },
                { name: "Dash Official Docs – Plotly", url: "https://dash.plotly.com/", type: "Free" },
                { name: "YouTube: Charming Data – Dash Full Course", url: "https://www.youtube.com/@CharmingData", type: "Free" }
              ],
              project: "Build and deploy a live stock price analysis app in Streamlit: fetch data, interactive charts, metrics, download CSV."
            },
            {
              day: 120,
              title: "D3.js: Custom Web Visualizations",
              hours: "10h",
              topics: [
                "D3 philosophy: data-driven DOM manipulation",
                "Selections: d3.select, selectAll, data(), join(), enter/update/exit pattern",
                "Scales: scaleLinear, scaleLog, scaleBand, scaleOrdinal, scaleTime",
                "Axes: d3.axisBottom, axisLeft — ticks, tickFormat, tickSize",
                "Shapes: d3.line, area, arc, pie, stack — path generators",
                "Transitions and animations: .transition().duration().ease()",
                "Force-directed graphs, tree layouts, geographic projections"
              ],
              resources: [
                { name: "Observable – D3 Official Notebooks", url: "https://observablehq.com/@d3", type: "Free" },
                { name: "D3 Official Documentation", url: "https://d3js.org/", type: "Free" },
                { name: "YouTube: Curran Kelleher – D3 Full Course", url: "https://www.youtube.com/@currankelleher", type: "Free" }
              ],
              project: "Build an interactive D3.js visualization: force-directed graph of character relationships in a book or film."
            },
            {
              day: 121,
              title: "Tableau & Power BI: Business Intelligence",
              hours: "9h",
              topics: [
                "Tableau Public: connecting data, dimensions vs measures, pills",
                "Chart types in Tableau: bar, line, scatter, map, heatmap, treemap, Gantt",
                "Calculated fields: LOD expressions (FIXED, INCLUDE, EXCLUDE)",
                "Tableau dashboards: containers, layout, device designer, actions",
                "Power BI: Power Query Editor, DAX formulas, relationships, slicers",
                "DAX functions: CALCULATE, FILTER, ALL, RELATED, SUMX, RANKX, time intelligence"
              ],
              resources: [
                { name: "Tableau Public – Free Version + Gallery", url: "https://public.tableau.com/", type: "Free" },
                { name: "Microsoft Power BI Desktop – Free", url: "https://powerbi.microsoft.com/", type: "Free" },
                { name: "YouTube: Andy Kriebel – Tableau Tips", url: "https://www.youtube.com/@vizwiz", type: "Free" }
              ],
              project: "Build a Tableau Public dashboard and a Power BI report on the same dataset. Publish both publicly."
            },
            {
              day: 122,
              title: "Week 22 Visualization Capstone",
              hours: "10h",
              topics: ["Full visualization portfolio piece"],
              resources: [
                { name: "Information is Beautiful Awards – Winning Examples", url: "https://www.informationisbeautifulawards.com/", type: "Free" }
              ],
              project: "CAPSTONE: Create a publication-quality data story — 8+ visualization types across Plotly + Matplotlib + D3 — telling a compelling narrative about a real-world dataset. Publish on Medium."
            }
          ]
        },
        {
          week: 19,
          title: "Business Intelligence & Analytics Engineering",
          days: [
            {
              day: 123,
              title: "Analytics Engineering with dbt",
              hours: "10h",
              topics: [
                "Analytics engineering: the layer between data engineering and analysis",
                "dbt (data build tool): models, tests, documentation, sources",
                "dbt model types: staging, intermediate, marts — layered architecture",
                "dbt tests: not_null, unique, accepted_values, relationships",
                "Jinja templating in dbt: macros, variables, config blocks",
                "dbt Cloud vs dbt Core — running in production"
              ],
              resources: [
                { name: "dbt Official Learn Platform", url: "https://learn.getdbt.com/", type: "Free" },
                { name: "dbt Documentation", url: "https://docs.getdbt.com/", type: "Free" },
                { name: "YouTube: Kahan Data Solutions – dbt Tutorial", url: "https://www.youtube.com/@KahanDataSolutions", type: "Free" }
              ],
              project: "Build a dbt project transforming raw e-commerce data into clean mart tables for reporting. Add full test suite."
            },
            {
              day: 124,
              title: "Data Warehousing: BigQuery, Snowflake, Redshift",
              hours: "9h",
              topics: [
                "Data warehouse architecture: OLTP vs OLAP, star schema vs snowflake schema",
                "Dimensional modeling: fact tables, dimension tables, slowly changing dimensions",
                "BigQuery: columnar storage, partitioning, clustering, slot-based pricing",
                "Snowflake: virtual warehouses, time travel, data sharing, zero-copy cloning",
                "Amazon Redshift: distribution styles, sort keys, VACUUM, ANALYZE",
                "Query optimization in MPP systems: avoiding cross-joins, predicate pushdown"
              ],
              resources: [
                { name: "BigQuery Sandbox – Free 10GB/month", url: "https://cloud.google.com/bigquery/docs/sandbox", type: "Free" },
                { name: "Snowflake Free Trial (30 days)", url: "https://trial.snowflake.com/", type: "Free" },
                { name: "The Data Warehouse Toolkit (Book – Kimball)", url: "https://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802", type: "Book" }
              ],
              project: "Load 10M+ row dataset into BigQuery. Build a star schema. Optimize 5 slow queries using partitioning + clustering."
            },
            {
              day: 125,
              title: "Business Metrics & KPI Design",
              hours: "9h",
              topics: [
                "Metric frameworks: AARRR (Pirate Metrics), HEART, NSM (North Star Metric)",
                "Defining good metrics: specific, measurable, actionable, relevant, time-bound",
                "Vanity metrics vs actionable metrics: the difference",
                "Cohort analysis: day-1, day-7, day-30 retention curves",
                "LTV/CAC analysis: customer lifetime value, acquisition cost",
                "Churn analysis: survival analysis, Kaplan-Meier curves"
              ],
              resources: [
                { name: "Lean Analytics (Book – Alistair Croll & Ben Yoskovitz)", url: "https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675", type: "Book" },
                { name: "YouTube: Google Analytics – Cohort Analysis", url: "https://www.youtube.com/@GoogleAnalytics", type: "Free" }
              ],
              project: "Design a full metrics framework for a SaaS company. Calculate LTV, CAC, churn, and NPS from mock data."
            },
            {
              day: 126,
              title: "A/B Testing & Causal Inference",
              hours: "10h",
              topics: [
                "Experiment design: control vs treatment, randomization, sample size calculation",
                "Statistical power, Type I and Type II errors, multiple testing problem",
                "Sequential testing and peeking problem — fixing early stopping",
                "Bayesian A/B testing vs frequentist — practical differences",
                "Causal inference: selection bias, confounding, DAGs",
                "Difference-in-differences, regression discontinuity, instrumental variables"
              ],
              resources: [
                { name: "Trustworthy Online Controlled Experiments (Book – Kohavi)", url: "https://www.amazon.com/Trustworthy-Online-Controlled-Experiments-Practical/dp/1108724264", type: "Book" },
                { name: "Evan\'s Awesome A/B Tools – Sample Size Calculator", url: "https://www.evanmiller.org/ab-testing/", type: "Free" }
              ],
              project: "Design and analyze a simulated A/B test: calculate sample size, run experiment, analyze results, write recommendation."
            },
            {
              day: 127,
              title: "Time Series Analysis & Forecasting",
              hours: "10h",
              topics: [
                "Time series components: trend, seasonality, cycles, residuals",
                "Decomposition: additive vs multiplicative — STL decomposition",
                "Stationarity: ADF test, differencing, log transformation",
                "ARIMA models: autoregression, integration, moving average — ACF/PACF plots",
                "Prophet (Meta): trend changepoints, seasonality, holidays — production forecasting",
                "LSTM for time series: sequence-to-sequence prediction with PyTorch"
              ],
              resources: [
                { name: "Prophet Official Docs – Meta", url: "https://facebook.github.io/prophet/", type: "Free" },
                { name: "YouTube: Ritvikmath – Time Series Analysis", url: "https://www.youtube.com/@ritvikmath", type: "Free" },
                { name: "Forecasting: Principles and Practice (Free Book – Hyndman)", url: "https://otexts.com/fpp3/", type: "Free" }
              ],
              project: "Forecast next 90 days of sales for a retail store using ARIMA + Prophet. Compare MAE/RMSE. Build Streamlit app."
            },
            {
              day: 128,
              title: "Geospatial Data Analysis",
              hours: "9h",
              topics: [
                "Geospatial data formats: GeoJSON, Shapefile, GeoTIFF, WKT/WKB",
                "GeoPandas: spatial joins, dissolve, buffer, distance calculations",
                "Folium: interactive Leaflet maps from Python — choropleth, markers, heatmaps",
                "Kepler.gl: large-scale geospatial visualization",
                "H3: Uber\'s hexagonal spatial indexing system",
                "PostGIS: spatial SQL queries — ST_Distance, ST_Within, ST_Intersects"
              ],
              resources: [
                { name: "GeoPandas Official Docs", url: "https://geopandas.org/en/stable/", type: "Free" },
                { name: "Kepler.gl – Open Source Geospatial Visualization", url: "https://kepler.gl/", type: "Free" }
              ],
              project: "Analyze Airbnb listings in a city: price heatmap, neighbourhood clustering, proximity to attractions geospatial analysis."
            },
            {
              day: 129,
              title: "Week 23 BI Capstone",
              hours: "12h",
              topics: ["Full analytics engineering pipeline"],
              resources: [],
              project: "CAPSTONE: Build a full analytics stack — raw data → dbt transformations → BigQuery warehouse → Tableau + Plotly dashboards → forecasting model → A/B test framework. Present as a business intelligence report."
            }
          ]
        },
        {
          week: 20,
          title: "Advanced Analytics: ML for Analysis",
          days: [
            {
              day: 130,
              title: "Predictive Analytics & Regression",
              hours: "10h",
              topics: [
                "Linear regression: OLS assumptions (LINE), coefficients, R², adjusted R²",
                "Multiple regression: multicollinearity, VIF, feature selection",
                "Regularization: Ridge (L2), Lasso (L1), ElasticNet — when each helps",
                "Logistic regression: log-odds, decision boundary, ROC curve",
                "Polynomial regression and interaction terms",
                "Regression diagnostics: residual plots, QQ plots, Cook\'s distance",
                "Interpreting results for non-technical stakeholders"
              ],
              resources: [
                { name: "StatQuest – Linear Regression Clearly Explained", url: "https://www.youtube.com/@statquest", type: "Free" },
                { name: "Introduction to Statistical Learning (Free PDF – James et al.)", url: "https://www.statlearning.com/", type: "Free" }
              ],
              project: "Build a house price prediction model. Interpret every coefficient. Present findings to a mock business audience."
            },
            {
              day: 131,
              title: "Clustering & Segmentation Analysis",
              hours: "9h",
              topics: [
                "K-Means: algorithm, elbow method, silhouette score, inertia",
                "Hierarchical clustering: dendrograms, linkage methods, Ward\'s method",
                "DBSCAN: density-based, noise points, epsilon and min_samples",
                "Gaussian Mixture Models: soft clustering, EM algorithm",
                "Customer segmentation: RFM analysis (Recency, Frequency, Monetary)",
                "Cluster profiling: interpreting and naming discovered segments"
              ],
              resources: [
                { name: "Towards Data Science – Clustering Algorithms Explained", url: "https://towardsdatascience.com/", type: "Free" },
                { name: "YouTube: ritvikmath – Clustering Methods", url: "https://www.youtube.com/@ritvikmath", type: "Free" }
              ],
              project: "Segment customers of an e-commerce platform using RFM + K-Means. Profile each segment. Build marketing recommendations."
            },
            {
              day: 132,
              title: "Natural Language Processing for Analytics",
              hours: "9h",
              topics: [
                "Text preprocessing: tokenization, stopwords, stemming, lemmatization",
                "Bag of Words, TF-IDF: converting text to numbers",
                "Sentiment analysis: VADER, TextBlob, transformer-based (distilBERT)",
                "Topic modeling: LDA (Latent Dirichlet Allocation), NMF",
                "Named entity recognition (NER): spaCy pipeline",
                "Text classification for customer feedback, reviews, support tickets"
              ],
              resources: [
                { name: "spaCy Official Documentation & Course", url: "https://spacy.io/", type: "Free" },
                { name: "Hugging Face NLP Course (Free)", url: "https://huggingface.co/learn/nlp-course/", type: "Free" }
              ],
              project: "Analyze 10,000 Amazon product reviews: sentiment trends, topic extraction, key complaint themes. Dashboard in Streamlit."
            },
            {
              day: 133,
              title: "Network Analysis & Graph Analytics",
              hours: "9h",
              topics: [
                "Graph theory fundamentals: nodes, edges, directed/undirected, weighted",
                "NetworkX: building graphs from data, graph metrics",
                "Centrality measures: degree, betweenness, closeness, eigenvector, PageRank",
                "Community detection: Louvain, Girvan-Newman algorithms",
                "Social network analysis: influence, reach, clustering coefficient",
                "Knowledge graphs: RDF, SPARQL, Neo4j graph database"
              ],
              resources: [
                { name: "NetworkX Official Documentation", url: "https://networkx.org/", type: "Free" },
                { name: "Neo4j Graph Academy (Free)", url: "https://graphacademy.neo4j.com/", type: "Free" }
              ],
              project: "Analyze a Twitter/social network dataset: find influencers, detect communities, visualize with PyVis."
            },
            {
              day: 134,
              title: "Data Storytelling & Communication",
              hours: "9h",
              topics: [
                "The McCandless method: information + story + goal + visual form",
                "Preattentive attributes: color, size, position — guiding the eye",
                "Decluttering: removing chart junk (Tufte\'s data-ink ratio principle)",
                "Color for communication: sequential, diverging, qualitative palettes",
                "Slide deck design for data presentations: one insight per slide rule",
                "Writing data-driven narratives: so what? → therefore? → but? framework"
              ],
              resources: [
                { name: "Storytelling with Data (Book – Cole Nussbaumer Knaflic)", url: "https://www.storytellingwithdata.com/", type: "Book" },
                { name: "YouTube: Cole Nussbaumer Knaflic – SWD Channel", url: "https://www.youtube.com/@storytellingwithdata", type: "Free" },
                { name: "The Functional Art (Book – Alberto Cairo)", url: "https://www.amazon.com/Functional-Art-introduction-information-visualization/dp/0321834739", type: "Book" }
              ],
              project: "Redesign 5 bad charts from the wild into clear, effective visualizations. Write the story each one tells."
            },
            {
              day: 135,
              title: "Real-Time Analytics & Streaming Data",
              hours: "10h",
              topics: [
                "Batch vs streaming analytics: when each applies",
                "Apache Kafka for analytics: topics, consumer groups, offsets",
                "Apache Flink: stateful stream processing, windowing (tumbling, sliding, session)",
                "Spark Structured Streaming: micro-batch, watermarks, late data handling",
                "Real-time dashboards: pushing data with WebSockets, Server-Sent Events",
                "ClickHouse: columnar OLAP for real-time analytics at scale"
              ],
              resources: [
                { name: "Apache Kafka Official Docs", url: "https://kafka.apache.org/documentation/", type: "Free" },
                { name: "ClickHouse Official Tutorial", url: "https://clickhouse.com/docs/en/tutorial", type: "Free" }
              ],
              project: "Build a real-time analytics pipeline: stream mock clickstream data through Kafka → aggregate with Flink → display on live Plotly dashboard."
            },
            {
              day: 136,
              title: "Week 24 Advanced Analytics Capstone",
              hours: "12h",
              topics: ["Full ML-powered analytics solution"],
              resources: [],
              project: "CAPSTONE: Build a complete customer analytics platform — segmentation (clustering) + churn prediction (ML) + sentiment analysis (NLP) + forecasting (Prophet) + live dashboard (Streamlit). Present as a boardroom deck."
            }
          ]
        },
        {
          week: 21,
          title: "Big Data & Cloud Analytics",
          days: [
            {
              day: 137,
              title: "Apache Spark: Big Data Processing",
              hours: "10h",
              topics: [
                "Spark architecture: driver, executors, cluster manager, DAG scheduler",
                "RDDs vs DataFrames vs Datasets: when to use each",
                "PySpark: SparkSession, read/write, transformations vs actions",
                "Spark SQL: querying DataFrames with SQL syntax, temp views",
                "Spark ML: Pipeline API, transformers, estimators, cross-validation",
                "Partitioning and shuffling: the biggest Spark performance pitfall"
              ],
              resources: [
                { name: "Apache Spark Official Docs", url: "https://spark.apache.org/docs/latest/", type: "Free" },
                { name: "Databricks Community Edition – Free Spark Environment", url: "https://community.cloud.databricks.com/", type: "Free" },
                { name: "Learning Spark (Book – O\'Reilly)", url: "https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/", type: "Book" }
              ],
              project: "Process a 10GB+ dataset with PySpark on Databricks. Join multiple tables, aggregate, and output clean analytics tables."
            },
            {
              day: 138,
              title: "Modern Data Stack: Lakehouse Architecture",
              hours: "9h",
              topics: [
                "Data lakehouse: combining lake flexibility with warehouse structure",
                "Delta Lake: ACID transactions on data lakes, time travel, schema evolution",
                "Apache Iceberg: table format for huge analytics datasets",
                "Databricks: Unity Catalog, Delta Live Tables, Photon engine",
                "Medallion architecture: Bronze → Silver → Gold layers",
                "Data mesh: domain-driven decentralized data ownership"
              ],
              resources: [
                { name: "Delta Lake Official Docs", url: "https://docs.delta.io/", type: "Free" },
                { name: "Databricks – Data + AI Summit Talks (YouTube)", url: "https://www.youtube.com/@Databricks", type: "Free" }
              ],
              project: "Build a medallion architecture pipeline on Databricks: raw CSV → Bronze Delta → Silver (cleaned) → Gold (aggregated marts)."
            },
            {
              day: 139,
              title: "Cloud Analytics: AWS, GCP & Azure Data Services",
              hours: "9h",
              topics: [
                "AWS analytics stack: S3 (data lake) + Glue (ETL) + Athena (query) + Redshift (warehouse) + QuickSight (BI)",
                "GCP analytics stack: Cloud Storage + Dataflow + BigQuery + Looker Studio",
                "Azure analytics stack: ADLS + Data Factory + Synapse + Power BI",
                "Choosing the right cloud analytics stack for your use case",
                "Cost optimization: lifecycle policies, query cost control, reserved capacity",
                "Data governance: lineage, cataloging, access control with Unity Catalog / AWS Glue Catalog"
              ],
              resources: [
                { name: "AWS Analytics Services Overview", url: "https://aws.amazon.com/big-data/datalakes-and-analytics/", type: "Free" },
                { name: "Google Cloud Skills Boost – Data Analytics Path (Free)", url: "https://www.cloudskillsboost.google/", type: "Free" }
              ],
              project: "Build a serverless analytics pipeline on AWS: S3 → Glue crawler → Athena queries → QuickSight dashboard."
            },
            {
              day: 140,
              title: "MLOps for Analytics: Productionizing Models",
              hours: "10h",
              topics: [
                "MLOps lifecycle: development → staging → production → monitoring",
                "Feature stores: Feast, Tecton — sharing features across models",
                "Model serving: FastAPI, BentoML, SageMaker endpoints",
                "Model monitoring: data drift (Evidently AI), concept drift, performance decay",
                "Experiment tracking: MLflow, Weights & Biases (W&B)",
                "Retraining triggers: scheduled, performance-based, data-drift-based"
              ],
              resources: [
                { name: "Evidently AI – Open Source ML Monitoring", url: "https://www.evidentlyai.com/", type: "Free" },
                { name: "Weights & Biases Docs", url: "https://docs.wandb.ai/", type: "Free" },
                { name: "Made With ML – MLOps Course (Free)", url: "https://madewithml.com/", type: "Free" }
              ],
              project: "Deploy your churn prediction model with MLflow tracking + FastAPI serving + Evidently data drift monitoring."
            },
            {
              day: 141,
              title: "Analytics Portfolio & Communication",
              hours: "9h",
              topics: [
                "Building an analyst portfolio: what companies actually want to see",
                "Kaggle competition strategy: kernels, ranking, medals",
                "Writing analytical blog posts that get read",
                "Presenting data insights to C-suite: brevity, impact, recommendations",
                "The analyst\'s toolkit summary: which tool for which job",
                "Career paths: data analyst → analytics engineer → data scientist → ML engineer"
              ],
              resources: [
                { name: "Towards Data Science – Publishing Your Analysis", url: "https://towardsdatascience.com/", type: "Free" },
                { name: "Kaggle Learn – Competitions Guide", url: "https://www.kaggle.com/competitions", type: "Free" }
              ],
              project: "Publish your best analysis on Kaggle as a notebook. Write a Medium article about your key finding. Share on LinkedIn."
            },
            {
              day: 142,
              title: "Phase 7 Grand Capstone: Day 1",
              hours: "12h",
              topics: ["Full end-to-end data analytics project"],
              resources: [],
              project: "Grand Capstone Part 1: Pick a real public dataset (government data, Kaggle, API). Define 5 business questions. Build full data pipeline: ingest → clean (dbt) → store (BigQuery/PostgreSQL) → analyze."
            },
            {
              day: 143,
              title: "Phase 7 Grand Capstone: Day 2",
              hours: "12h",
              topics: ["Visualization, ML models, and storytelling"],
              resources: [],
              project: "Grand Capstone Part 2: Build 10+ visualizations (Matplotlib + Plotly + D3) + ML model (prediction/clustering) + interactive Streamlit app + Tableau dashboard + written executive report. Deploy live."
            }
          ]
        },
        {
          week: 22,
          title: "Data Analytics Career Launch",
          days: [
            {
              day: 144,
              title: "Analytics Interview Preparation",
              hours: "10h",
              topics: [
                "SQL interview questions: window functions, self-joins, tricky edge cases",
                "Python/pandas interview: data cleaning scenarios, time pressure problems",
                "Statistics interview: p-values, CLT, hypothesis testing explanation",
                "Case study interviews: product metrics, experiment design, business impact",
                "Take-home assignments: structure, presentation, time management",
                "Behavioral interviews for data roles: STAR + data-specific situations"
              ],
              resources: [
                { name: "StrataScratch – Real Data Interview Questions", url: "https://www.stratascratch.com/", type: "Free/Paid" },
                { name: "DataLemur – SQL Interview Questions", url: "https://datalemur.com/", type: "Free" },
                { name: "YouTube: Emma Ding – Data Science Interviews", url: "https://www.youtube.com/@DataInterviewPro", type: "Free" }
              ],
              project: "Complete 30 SQL interview questions on DataLemur. Do 2 mock case study interviews. Record yourself presenting findings."
            },
            {
              day: 145,
              title: "Certifications & Continuing Learning",
              hours: "8h",
              topics: [
                "Google Data Analytics Professional Certificate (Coursera)",
                "AWS Certified Data Analytics – Specialty",
                "Databricks Certified Associate Developer for Apache Spark",
                "Microsoft Power BI Data Analyst Associate (PL-300)",
                "Tableau Desktop Specialist",
                "dbt Analytics Engineering Certification"
              ],
              resources: [
                { name: "Google Data Analytics Certificate – Coursera", url: "https://www.coursera.org/professional-certificates/google-data-analytics", type: "Paid" },
                { name: "dbt Certification – Official", url: "https://www.getdbt.com/certifications/analytics-engineer", type: "Paid" }
              ],
              project: "Complete Google Data Analytics Certificate practice exam. Build a 90-day cert study plan for your chosen cert."
            },
            {
              day: 146,
              title: "PHASE 7 GRADUATION",
              hours: "8h",
              topics: [
                "Complete portfolio review: all 7 phases",
                "Cross-discipline synthesis: how data analysis enhances every other field",
                "Final career roadmap across all disciplines",
                "Celebrate the full journey"
              ],
              resources: [],
              project: "FINAL GRADUATION: You now have mastery across Graphic Design, 2D Animation, VFX, 3D Animation, Computer Science, Computer Vision, Quantum Computing, and Data Analysis & Visualization. Present your complete body of work. Apply to your first 10 dream roles."
            }
          ]
        }
      ]
    },
    {
      id: 7,
      phase: "Phase 7",
      title: "Engineering: Mechanical, Civil, Electrical, Electronics & Biotech",
      color: "#E76F51",
      accent: "#F4A261",
      duration: "Weeks 23–28",
      weeks: [
        {
          week: 23,
          title: "Engineering Foundations & Mathematics",
          days: [
            {
              day: 147,
              title: "Engineering Mathematics: Calculus, Linear Algebra & Differential Equations",
              hours: "10h",
              topics: [
                "Differential calculus: limits, derivatives, chain rule, implicit differentiation",
                "Integral calculus: definite/indefinite integrals, integration by parts, substitution",
                "Multivariable calculus: partial derivatives, gradient, divergence, curl, Laplacian",
                "Linear algebra for engineers: systems of equations, eigenvalues, matrix decomposition",
                "Ordinary differential equations (ODEs): first-order, second-order, Laplace transforms",
                "Partial differential equations (PDEs): heat, wave, Laplace equations — conceptual",
                "Numerical methods: Euler, Runge-Kutta, Newton-Raphson, finite difference"
              ],
              resources: [
                { name: "MIT OCW 18.01 & 18.02 – Single & Multivariable Calculus (Free)", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/", type: "Free" },
                { name: "3Blue1Brown – Essence of Calculus (YouTube)", url: "https://www.youtube.com/@3blue1brown", type: "Free" },
                { name: "Engineering Mathematics – K.A. Stroud (Book)", url: "https://www.amazon.com/Engineering-Mathematics-K-Stroud/dp/1137031204", type: "Book" }
              ],
              project: "Solve 30 problems spanning derivatives, integrals, ODEs, and matrix operations. Implement numerical ODE solver in Python."
            },
            {
              day: 148,
              title: "Physics for Engineers: Mechanics, Thermodynamics & Electromagnetism",
              hours: "10h",
              topics: [
                "Classical mechanics: Newton's laws, work-energy theorem, momentum, rotational dynamics",
                "Statics: free body diagrams, equilibrium, trusses, friction, centroids",
                "Dynamics: kinematics, projectile motion, circular motion, vibrations",
                "Thermodynamics: laws of thermodynamics, entropy, Carnot cycle, heat transfer modes",
                "Fluid mechanics: Bernoulli's equation, Reynolds number, viscosity, pipe flow",
                "Electromagnetism: Coulomb's law, Gauss's law, Faraday's law, Maxwell's equations conceptual"
              ],
              resources: [
                { name: "MIT OCW 8.01 – Physics I Classical Mechanics (Free)", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", type: "Free" },
                { name: "Khan Academy – Physics (Free)", url: "https://www.khanacademy.org/science/physics", type: "Free" },
                { name: "Engineering Mechanics: Statics & Dynamics – Hibbeler (Book)", url: "https://www.amazon.com/Engineering-Mechanics-Statics-Russell-Hibbeler/dp/0133918920", type: "Book" }
              ],
              project: "Simulate projectile motion and a spring-mass-damper system in Python using scipy.integrate. Visualize trajectories."
            },
            {
              day: 149,
              title: "Engineering Drawing, CAD & Simulation Tools",
              hours: "9h",
              topics: [
                "Engineering drawing: orthographic projection, isometric view, section views, tolerances, GD&T",
                "AutoCAD 2D: lines, arcs, dimensions, layers, blocks, annotation",
                "Fusion 360 / SolidWorks intro: sketching, extrude, revolve, fillet, assembly",
                "FEA (Finite Element Analysis): mesh, boundary conditions, stress/strain simulation",
                "MATLAB/Simulink: matrix operations, plotting, block diagrams for dynamic systems",
                "Python for engineering: NumPy, SciPy, SymPy for symbolic math"
              ],
              resources: [
                { name: "Autodesk Fusion 360 – Free for Students/Hobbyists", url: "https://www.autodesk.com/products/fusion-360/free-trial", type: "Free" },
                { name: "MATLAB Onramp – MathWorks Free Course", url: "https://matlabacademy.mathworks.com/", type: "Free" },
                { name: "YouTube: Paul McWhorter – Fusion 360 Beginner Series", url: "https://www.youtube.com/@paulmcwhorter", type: "Free" }
              ],
              project: "Design a mechanical bracket in Fusion 360. Run FEA stress analysis. Export engineering drawing with full GD&T annotation."
            },
            {
              day: 150,
              title: "Materials Science & Manufacturing",
              hours: "9h",
              topics: [
                "Crystal structure: BCC, FCC, HCP — lattice parameters, Miller indices",
                "Mechanical properties: stress-strain curve, Young's modulus, yield strength, UTS, fatigue",
                "Material classes: metals, polymers, ceramics, composites — property comparison",
                "Heat treatment: annealing, quenching, tempering, case hardening",
                "Manufacturing processes: CNC machining, casting, forging, welding, additive (3D printing)",
                "Material selection: Ashby charts, cost vs performance trade-offs"
              ],
              resources: [
                { name: "MIT OCW 3.091 – Introduction to Solid-State Chemistry (Free)", url: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/", type: "Free" },
                { name: "Materials Science and Engineering – Callister (Book)", url: "https://www.amazon.com/Materials-Science-Engineering-Introduction-Callister/dp/1118324579", type: "Book" }
              ],
              project: "Select optimal materials for 3 engineering scenarios (aerospace bracket, biomedical implant, circuit board) using Ashby charts."
            },
            {
              day: 151,
              title: "Engineering Design Process & Project Management",
              hours: "8h",
              topics: [
                "Engineering design process: define → research → specify → conceptualize → prototype → test → iterate",
                "Requirements engineering: functional vs non-functional, constraints, trade-space",
                "Failure Mode and Effects Analysis (FMEA): risk assessment methodology",
                "Design for Manufacturing (DFM) and Design for Assembly (DFA)",
                "Project management: Gantt charts, WBS, critical path method (CPM), earned value",
                "Engineering ethics: codes of conduct, safety responsibility, whistleblowing cases"
              ],
              resources: [
                { name: "MIT OCW – Engineering Design (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "The Engineering Design Process – Yousef Haik (Book)", url: "https://www.amazon.com/Engineering-Design-Process-Yousef-Haik/dp/1305255712", type: "Book" }
              ],
              project: "Apply full design process to a real problem: write requirements doc, concept sketches, FMEA table, and project plan."
            },
            {
              day: 152,
              title: "Week Capstone: Engineering Foundations",
              hours: "10h",
              topics: ["Integrate math, physics, CAD, and materials knowledge"],
              resources: [],
              project: "CAPSTONE: Design a load-bearing structure in Fusion 360. Perform hand calculations for stress. Run FEA. Compare and validate results. Present full engineering report."
            }
          ]
        },
        {
          week: 24,
          title: "Mechanical Engineering",
          days: [
            {
              day: 153,
              title: "Machine Design: Shafts, Bearings, Gears & Mechanisms",
              hours: "10h",
              topics: [
                "Shaft design: bending, torsion, combined loading, fatigue — ASME DE-Goodman criterion",
                "Keys and couplings: Woodruff key, splines, flexible couplings",
                "Bearings: rolling element vs journal, load ratings, selection from SKF/FAG catalogs",
                "Gears: spur, helical, bevel, worm — tooth geometry, Lewis equation, dynamic factor",
                "Gear trains: simple, compound, epicyclic (planetary) — speed and torque ratios",
                "Mechanisms: four-bar linkage, slider-crank, Grashof condition, velocity/acceleration analysis"
              ],
              resources: [
                { name: "Shigley's Mechanical Engineering Design – Budynas (Book)", url: "https://www.amazon.com/Shigleys-Mechanical-Engineering-Design-McGraw-Hill/dp/1260570681", type: "Book" },
                { name: "MIT OCW 2.72 – Elements of Mechanical Design (Free)", url: "https://ocw.mit.edu/courses/2-72-elements-of-mechanical-design-spring-2009/", type: "Free" }
              ],
              project: "Design a 2-stage gear reducer in Fusion 360: select gear ratios, calculate shaft stresses, choose bearings. Validate with FEA."
            },
            {
              day: 154,
              title: "Thermodynamics & Heat Transfer Engineering",
              hours: "10h",
              topics: [
                "Power cycles: Rankine (steam), Brayton (gas turbine), Otto (gasoline), Diesel",
                "Refrigeration: vapor-compression cycle, COP, psychrometrics for HVAC",
                "Heat exchangers: shell-and-tube, plate, LMTD and NTU methods",
                "Conduction: Fourier's law, thermal resistance, composite walls, fins",
                "Convection: forced vs natural, Nusselt, Reynolds, Prandtl numbers",
                "Radiation: Stefan-Boltzmann, view factors, blackbody vs real surfaces"
              ],
              resources: [
                { name: "MIT OCW 2.005 – Thermal-Fluids Engineering (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Fundamentals of Heat and Mass Transfer – Incropera (Book)", url: "https://www.amazon.com/Fundamentals-Heat-Mass-Transfer-Incropera/dp/0470501979", type: "Book" }
              ],
              project: "Simulate a heat exchanger in Python: calculate required area for given temperatures and flows using LMTD method."
            },
            {
              day: 155,
              title: "Fluid Mechanics & Hydraulic Systems",
              hours: "9h",
              topics: [
                "Fluid statics: pressure, buoyancy, manometers, forces on submerged surfaces",
                "Pipe flow: Darcy-Weisbach, Moody chart, minor losses, pump selection",
                "Turbomachinery: centrifugal pumps, turbines, affinity laws, cavitation",
                "Hydraulic systems: Pascal's law, cylinders, motors, control valves, accumulator",
                "Pneumatic systems: compressors, regulators, FRL units, actuators",
                "CFD basics: meshing, boundary conditions, turbulence models (k-ε, k-ω) in OpenFOAM"
              ],
              resources: [
                { name: "OpenFOAM – Free Open Source CFD", url: "https://www.openfoam.com/", type: "Free" },
                { name: "Fluid Mechanics – Frank White (Book)", url: "https://www.amazon.com/Fluid-Mechanics-Frank-White/dp/0073398276", type: "Book" }
              ],
              project: "Design a hydraulic press circuit. Simulate pipe network flow in Python. Run CFD on a 2D airfoil in OpenFOAM."
            },
            {
              day: 156,
              title: "Control Systems & Mechatronics",
              hours: "10h",
              topics: [
                "Control theory: open-loop vs closed-loop, transfer functions, block diagrams",
                "PID controllers: proportional, integral, derivative — tuning (Ziegler-Nichols)",
                "Stability: Routh-Hurwitz criterion, Bode plots, phase/gain margin",
                "State-space representation: A, B, C, D matrices, controllability, observability",
                "Mechatronics: integrating mechanical, electrical, and software systems",
                "Sensors: encoders, accelerometers, load cells, thermocouples — signal conditioning"
              ],
              resources: [
                { name: "MIT OCW 6.302 – Feedback System Design (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Control Systems Engineering – Nise (Book)", url: "https://www.amazon.com/Control-Systems-Engineering-Norman-Nise/dp/1118170512", type: "Book" },
                { name: "YouTube: Brian Douglas – Control System Lectures", url: "https://www.youtube.com/@BrianBDouglas", type: "Free" }
              ],
              project: "Simulate PID control of a DC motor in Python/Simulink. Tune gains. Plot step response, Bode plot. Design state-space observer."
            },
            {
              day: 157,
              title: "Robotics & Automation",
              hours: "10h",
              topics: [
                "Robot kinematics: forward kinematics, inverse kinematics, Denavit-Hartenberg parameters",
                "Robot dynamics: Lagrangian formulation, Newton-Euler method",
                "Path planning: RRT, A*, potential fields — obstacle avoidance",
                "Robot Operating System (ROS 2): nodes, topics, services, URDF, Gazebo simulation",
                "Industrial automation: PLCs (Ladder Logic, Structured Text), SCADA systems",
                "Collaborative robots (cobots): safety standards ISO 10218, force torque sensing"
              ],
              resources: [
                { name: "ROS 2 Official Tutorials", url: "https://docs.ros.org/en/humble/Tutorials.html", type: "Free" },
                { name: "Modern Robotics – Lynch & Park (Free Online Course + Book)", url: "https://modernrobotics.northwestern.edu/", type: "Free" },
                { name: "YouTube: Articulated Robotics – ROS 2", url: "https://www.youtube.com/@ArticulatedRobotics", type: "Free" }
              ],
              project: "Simulate a 6-DOF robot arm in Gazebo + ROS 2. Implement forward/inverse kinematics. Plan a pick-and-place trajectory."
            },
            {
              day: 158,
              title: "Mechanical Engineering Capstone",
              hours: "12h",
              topics: ["Full mechanical system design"],
              resources: [
                { name: "GrabCAD – Engineering Model Library", url: "https://grabcad.com/library", type: "Free" }
              ],
              project: "CAPSTONE: Design a complete mechanical system (e.g. conveyor system or robotic gripper): CAD model → stress analysis → control system → ROS 2 simulation. Write full engineering report."
            }
          ]
        },
        {
          week: 25,
          title: "Civil Engineering",
          days: [
            {
              day: 159,
              title: "Structural Analysis & Design",
              hours: "10h",
              topics: [
                "Structural analysis: trusses (method of joints, sections), beams (shear/moment diagrams)",
                "Deflection: double integration, moment-area, conjugate beam methods",
                "Indeterminate structures: force method, stiffness method, moment distribution",
                "Reinforced concrete design: ACI 318 code, beam design, slab design, column design",
                "Steel design: AISC LRFD, beam-column interaction, connection design",
                "Structural software: SAP2000 / ETABS / OpenSees — modeling and analysis"
              ],
              resources: [
                { name: "MIT OCW 1.050 – Solid Mechanics (Free)", url: "https://ocw.mit.edu/courses/1-050-engineering-mechanics-i-fall-2007/", type: "Free" },
                { name: "Structural Analysis – Hibbeler (Book)", url: "https://www.amazon.com/Structural-Analysis-Russell-Hibbeler/dp/0134610679", type: "Book" },
                { name: "OpenSees – Free Structural Analysis Software", url: "https://opensees.berkeley.edu/", type: "Free" }
              ],
              project: "Analyze a multi-story building frame: draw shear/moment diagrams, design RC beams and columns per ACI 318."
            },
            {
              day: 160,
              title: "Geotechnical Engineering & Foundation Design",
              hours: "9h",
              topics: [
                "Soil classification: USCS, Atterberg limits, grain size distribution",
                "Soil properties: permeability, consolidation, shear strength (Mohr-Coulomb)",
                "Site investigation: borings, SPT, CPT, lab tests (triaxial, direct shear, oedometer)",
                "Shallow foundations: bearing capacity (Terzaghi, Meyerhof), settlement analysis",
                "Deep foundations: pile types, capacity (static, dynamic), group effects",
                "Earth retaining: retaining walls, sheet piles, braced excavations, slope stability"
              ],
              resources: [
                { name: "MIT OCW 1.361 – Advanced Soil Mechanics (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Principles of Geotechnical Engineering – Das (Book)", url: "https://www.amazon.com/Principles-Geotechnical-Engineering-Braja-Das/dp/1305970934", type: "Book" }
              ],
              project: "Design a shallow foundation for a 5-story building. Perform bearing capacity and settlement calculations in Python."
            },
            {
              day: 161,
              title: "Transportation & Highway Engineering",
              hours: "9h",
              topics: [
                "Geometric design: horizontal curves, vertical curves, sight distance, superelevation",
                "Pavement design: flexible (AASHTO) and rigid (PCA) pavement thickness design",
                "Traffic engineering: volume studies, LOS (Level of Service), signal timing (Webster)",
                "Transportation planning: trip generation, distribution, modal split, assignment (4-step model)",
                "Highway drainage: culverts, catch basins, storm sewer design (rational method)",
                "GIS for transportation: network analysis in QGIS, routing optimization"
              ],
              resources: [
                { name: "QGIS – Free Open Source GIS", url: "https://qgis.org/", type: "Free" },
                { name: "Traffic Engineering – Roess, Prassas & McShane (Book)", url: "https://www.amazon.com/Traffic-Engineering-Roger-Roess/dp/013611453X", type: "Book" }
              ],
              project: "Design a 2km highway alignment: horizontal + vertical curves, pavement thickness, drainage, signal timing at intersections."
            },
            {
              day: 162,
              title: "Water Resources, Environmental & Sustainability",
              hours: "9h",
              topics: [
                "Hydrology: rainfall-runoff, unit hydrograph, flood frequency analysis, HEC-HMS",
                "Hydraulics: open channel flow, Manning's equation, culvert design, HEC-RAS",
                "Water supply: demand estimation, distribution network design (Hardy-Cross), WaterGEMS",
                "Wastewater: collection systems, treatment (primary, secondary, tertiary), sludge handling",
                "Environmental engineering: air quality, noise, EIA (Environmental Impact Assessment)",
                "Sustainable design: LEED certification, green infrastructure, carbon footprint in construction"
              ],
              resources: [
                { name: "HEC-HMS & HEC-RAS – Free USACE Software", url: "https://www.hec.usace.army.mil/", type: "Free" },
                { name: "Water Resources Engineering – Wurbs & James (Book)", url: "https://www.amazon.com/Water-Resources-Engineering-Ralph-Wurbs/dp/0130812935", type: "Book" }
              ],
              project: "Perform flood analysis for a watershed using HEC-HMS. Design a stormwater management system. Calculate LEED points."
            },
            {
              day: 163,
              title: "Construction Management & BIM",
              hours: "9h",
              topics: [
                "Construction methods: formwork, scaffolding, earthwork, concrete placement",
                "Project scheduling: CPM, PERT, resource leveling, crashing",
                "Cost estimation: quantity takeoff, unit price, bid preparation",
                "Building Information Modeling (BIM): Revit basics, IFC standard, clash detection",
                "Construction contracts: FIDIC, NEC, lump sum vs cost-plus",
                "Safety: OSHA construction standards, hazard identification, PPE"
              ],
              resources: [
                { name: "Autodesk Revit – Free Student License", url: "https://www.autodesk.com/education/edu-software/overview", type: "Free" },
                { name: "Construction Project Management – Levy (Book)", url: "https://www.amazon.com/Construction-Process-Planning-Management-Owner/dp/0750678321", type: "Book" }
              ],
              project: "Create a BIM model of a simple building in Revit. Generate construction schedule (CPM), cost estimate, and clash detection report."
            },
            {
              day: 164,
              title: "Civil Engineering Capstone",
              hours: "12h",
              topics: ["Complete civil infrastructure project"],
              resources: [
                { name: "AutoCAD Civil 3D – Free Student License", url: "https://www.autodesk.com/education/", type: "Free" }
              ],
              project: "CAPSTONE: Design a small bridge — structural analysis (SAP2000), foundation design, hydraulic scour analysis, BIM model (Revit), construction schedule, and cost estimate. Submit full engineering package."
            }
          ]
        },
        {
          week: 26,
          title: "Electrical Engineering",
          days: [
            {
              day: 165,
              title: "Circuit Theory & Analysis",
              hours: "10h",
              topics: [
                "DC circuits: Ohm's law, KVL, KCL, superposition, Thevenin, Norton, maximum power transfer",
                "AC circuits: phasors, impedance, admittance, power factor, reactive power, apparent power",
                "AC circuit analysis: mesh analysis, nodal analysis in phasor domain",
                "Resonance: series RLC, parallel RLC, Q-factor, bandwidth",
                "Three-phase systems: balanced wye and delta, power in three-phase",
                "Transient analysis: RC, RL, RLC step response — Laplace transform method"
              ],
              resources: [
                { name: "MIT OCW 6.002 – Circuits and Electronics (Free)", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", type: "Free" },
                { name: "Electric Circuits – Nilsson & Riedel (Book)", url: "https://www.amazon.com/Electric-Circuits-James-Nilsson/dp/0134746961", type: "Book" },
                { name: "Falstad Circuit Simulator – Free Online", url: "https://www.falstad.com/circuit/", type: "Free" }
              ],
              project: "Analyze 20 circuits using KVL/KCL, Thevenin, and Laplace methods. Verify with Falstad simulator and LTspice."
            },
            {
              day: 166,
              title: "Electronic Devices & Analog Circuits",
              hours: "10h",
              topics: [
                "Semiconductor physics: p-n junction, depletion region, diode equation, I-V characteristics",
                "Diode circuits: rectifiers (half, full-wave, bridge), clippers, clampers, Zener regulators",
                "BJT transistors: operation regions (cut-off, active, saturation), biasing, small-signal model",
                "MOSFETs: enhancement vs depletion, NMOS/PMOS, biasing, small-signal model",
                "Amplifier configurations: common emitter, common source, gain, input/output impedance",
                "Op-Amps: ideal model, inverting, non-inverting, summing, integrator, differentiator, comparator"
              ],
              resources: [
                { name: "MIT OCW 6.012 – Microelectronic Devices (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Microelectronic Circuits – Sedra/Smith (Book)", url: "https://www.amazon.com/Microelectronic-Circuits-Adel-Sedra/dp/0190853549", type: "Book" },
                { name: "LTspice – Free SPICE Simulator", url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", type: "Free" }
              ],
              project: "Design a BJT audio amplifier: bias circuit → small-signal gain → frequency response. Simulate in LTspice. Build on breadboard."
            },
            {
              day: 167,
              title: "Digital Electronics & Logic Design",
              hours: "10h",
              topics: [
                "Number systems: binary, octal, hex, BCD, IEEE 754 floating point",
                "Boolean algebra: De Morgan's, Karnaugh maps (K-map), SOP/POS minimization",
                "Combinational circuits: adders, subtractors, multiplexers, decoders, encoders, comparators",
                "Sequential circuits: latches (SR, D), flip-flops (D, JK, T), registers, counters",
                "Finite state machines: Mealy vs Moore, state diagrams, state tables",
                "VHDL/Verilog: hardware description language basics, synthesis, FPGA implementation"
              ],
              resources: [
                { name: "Nand2Tetris – Build a Computer from Scratch (Free)", url: "https://www.nand2tetris.org/", type: "Free" },
                { name: "Digital Design – Morris Mano (Book)", url: "https://www.amazon.com/Digital-Design-5th-Morris-Mano/dp/0132774208", type: "Book" },
                { name: "Logisim – Free Logic Circuit Simulator", url: "http://www.cburch.com/logisim/", type: "Free" }
              ],
              project: "Design a 4-bit ALU in Logisim. Implement in Verilog. Synthesize on FPGA (Xilinx Vivado or Intel Quartus)."
            },
            {
              day: 168,
              title: "Power Systems & Energy Engineering",
              hours: "9h",
              topics: [
                "Power system components: generators, transformers, transmission lines, buses",
                "Per-unit system: normalization, base quantities",
                "Load flow analysis: Gauss-Seidel, Newton-Raphson power flow",
                "Fault analysis: symmetrical three-phase fault, unsymmetrical faults, sequence networks",
                "Power system protection: relays (overcurrent, differential, distance), coordination",
                "Renewable energy: solar PV (I-V curve, MPPT), wind turbines (DFIG), grid integration"
              ],
              resources: [
                { name: "Power Systems Analysis – Stevenson (Book)", url: "https://www.amazon.com/Elements-Power-Systems-Analysis-Stevenson/dp/0070612781", type: "Book" },
                { name: "OpenDSS – Free Electric Power Distribution Simulator", url: "https://www.epri.com/pages/sa/opendss", type: "Free" }
              ],
              project: "Simulate a 5-bus power system in Python/OpenDSS: load flow, fault analysis, size protective relays."
            },
            {
              day: 169,
              title: "Signal Processing & Communications",
              hours: "10h",
              topics: [
                "Signals: continuous vs discrete, energy vs power, even/odd, periodicity",
                "Fourier series and Fourier transform: frequency domain analysis",
                "Discrete Fourier Transform (DFT) and FFT algorithm",
                "Sampling theorem: Nyquist rate, aliasing, anti-aliasing filters",
                "Digital filters: FIR, IIR — design with scipy.signal",
                "Modulation: AM, FM, PSK, QAM — digital communications fundamentals",
                "OFDM: the basis of 4G/5G/WiFi — multipath, cyclic prefix, subcarriers"
              ],
              resources: [
                { name: "MIT OCW 6.341 – Discrete-Time Signal Processing (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Signals and Systems – Oppenheim & Willsky (Book)", url: "https://www.amazon.com/Signals-Systems-2nd-Alan-Oppenheim/dp/0138147574", type: "Book" },
                { name: "YouTube: Professor Leonard – Signal Processing", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Filter real audio signal using FIR bandpass filter in Python. Compute FFT. Implement BPSK modulator/demodulator. Calculate BER."
            },
            {
              day: 170,
              title: "Electrical Engineering Capstone",
              hours: "12h",
              topics: ["Complete electrical system design"],
              resources: [
                { name: "KiCad – Free PCB Design Software", url: "https://www.kicad.org/", type: "Free" }
              ],
              project: "CAPSTONE: Design a complete power supply system — transformer selection, rectifier, filter, linear regulator, PCB layout in KiCad, LTspice simulation, and signal integrity analysis."
            }
          ]
        },
        {
          week: 27,
          title: "Electronics & Embedded Systems",
          days: [
            {
              day: 171,
              title: "Microcontrollers: Arduino & ARM Cortex",
              hours: "10h",
              topics: [
                "Microcontroller architecture: CPU core, flash, SRAM, peripherals, clock system",
                "Arduino (AVR/ARM): digital I/O, PWM, ADC, UART, SPI, I2C programming",
                "ARM Cortex-M: STM32 ecosystem, registers, GPIO, interrupts, DMA",
                "Embedded C: bitwise operations, register-level programming, volatile keyword",
                "Real-Time Operating Systems (RTOS): FreeRTOS tasks, queues, semaphores, mutexes",
                "Debugging: oscilloscope, logic analyzer, JTAG/SWD debugging"
              ],
              resources: [
                { name: "Arduino Official Documentation", url: "https://docs.arduino.cc/", type: "Free" },
                { name: "Embedded Systems – ARM Cortex-M (Book – Yiu)", url: "https://www.amazon.com/Definitive-Guide-ARM-Cortex-M3-Cortex-M4/dp/0124080820", type: "Book" },
                { name: "YouTube: Phil's Lab – STM32 Embedded Systems", url: "https://www.youtube.com/@PhilsLab", type: "Free" }
              ],
              project: "Build a real-time data logger on STM32: read temperature/humidity sensor (I2C), log to SD card (SPI), display on OLED, send via UART."
            },
            {
              day: 172,
              title: "PCB Design & Hardware Development",
              hours: "9h",
              topics: [
                "PCB design flow: schematic capture → netlist → layout → gerber → fabrication",
                "KiCad: schematic symbols, PCB footprints, layout, DRC, 3D view",
                "PCB layout rules: trace width, clearance, via sizing, controlled impedance",
                "High-speed design: signal integrity, decoupling capacitors, ground planes",
                "EMC/EMI: filtering, shielding, PCB stackup for emissions compliance",
                "Design for testability: test points, JTAG headers, programming connectors"
              ],
              resources: [
                { name: "KiCad Official Tutorials", url: "https://docs.kicad.org/", type: "Free" },
                { name: "YouTube: Phil's Lab – KiCad PCB Design", url: "https://www.youtube.com/@PhilsLab", type: "Free" },
                { name: "Altium Designer – 30-Day Free Trial", url: "https://www.altium.com/altium-designer/free-trial", type: "Free" }
              ],
              project: "Design a custom microcontroller development board in KiCad: STM32 + USB + sensors + power supply. Order from JLCPCB."
            },
            {
              day: 173,
              title: "IoT Systems & Wireless Communication",
              hours: "9h",
              topics: [
                "IoT architecture: edge devices, gateways, cloud, applications",
                "Wireless protocols: WiFi (ESP32), Bluetooth BLE, Zigbee, LoRaWAN, NB-IoT",
                "MQTT protocol: publish/subscribe, broker (Mosquitto), QoS levels",
                "ESP32: dual-core Xtensa, WiFi + BLE, MicroPython and Arduino IDE",
                "Cloud IoT platforms: AWS IoT Core, Google Cloud IoT, Azure IoT Hub",
                "IoT security: TLS/DTLS, device authentication, firmware update OTA"
              ],
              resources: [
                { name: "ESP32 Official Documentation – Espressif", url: "https://docs.espressif.com/", type: "Free" },
                { name: "Random Nerd Tutorials – ESP32 Projects", url: "https://randomnerdtutorials.com/", type: "Free" }
              ],
              project: "Build an IoT environmental monitoring system: ESP32 reads sensors → MQTT → AWS IoT Core → React dashboard with live charts."
            },
            {
              day: 174,
              title: "Power Electronics & Motor Drives",
              hours: "10h",
              topics: [
                "Power semiconductor switches: MOSFET, IGBT, SCR, diode — switching characteristics",
                "DC-DC converters: buck, boost, buck-boost — duty cycle, CCM/DCM",
                "AC-DC: single/three-phase rectifiers, PFC (Power Factor Correction)",
                "DC-AC inverters: H-bridge, SPWM, three-phase VSI",
                "Motor drives: DC motor control (H-bridge + PWM), BLDC (6-step commutation), AC induction (V/f control)",
                "Field Oriented Control (FOC): Park/Clarke transforms, vector control of PMSM"
              ],
              resources: [
                { name: "MIT OCW 6.334 – Power Electronics (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Power Electronics – Mohan, Undeland & Robbins (Book)", url: "https://www.amazon.com/Power-Electronics-Converters-Applications-Design/dp/0471226939", type: "Book" }
              ],
              project: "Design and simulate a buck converter (48V→12V, 5A) in LTspice. Implement BLDC motor FOC on STM32 in MATLAB/Simulink."
            },
            {
              day: 175,
              title: "VLSI Design & Semiconductor Fabrication",
              hours: "9h",
              topics: [
                "CMOS logic: inverter, NAND, NOR, complex gates — sizing, static/dynamic power",
                "VLSI design flow: RTL → synthesis → place & route → tape-out",
                "SPICE simulation: transistor-level circuit simulation",
                "Semiconductor fabrication: oxidation, doping, lithography, etching, metallization",
                "Technology nodes: from 180nm to 3nm — FinFET, GAAFET evolution",
                "Open-source VLSI: OpenLane, Google SkyWater 130nm PDK, Caravel harness"
              ],
              resources: [
                { name: "Google SkyWater + OpenLane – Free Open Source VLSI Flow", url: "https://github.com/google/skywater-pdk", type: "Free" },
                { name: "CMOS VLSI Design – Weste & Harris (Book)", url: "https://www.amazon.com/CMOS-VLSI-Design-Systems-Perspective/dp/0321547748", type: "Book" }
              ],
              project: "Design a 4-bit ripple carry adder in Verilog. Synthesize with OpenLane using SkyWater 130nm PDK. Analyze timing and area."
            },
            {
              day: 176,
              title: "Electronics & Embedded Capstone",
              hours: "12h",
              topics: ["Full embedded system from hardware to cloud"],
              resources: [],
              project: "CAPSTONE: Design and build a complete embedded system — custom PCB (KiCad) + STM32 firmware (FreeRTOS) + IoT connectivity (MQTT/WiFi) + cloud dashboard + power electronics sub-system. Document fully."
            }
          ]
        },
        {
          week: 28,
          title: "Biotechnology & Biomedical Engineering",
          days: [
            {
              day: 177,
              title: "Cell Biology & Molecular Biology Foundations",
              hours: "9h",
              topics: [
                "Cell structure: prokaryotic vs eukaryotic, organelles and their functions",
                "Central dogma: DNA replication, transcription (DNA→RNA), translation (RNA→protein)",
                "Genes, alleles, mutations: point mutation, frameshift, deletion, insertion",
                "Gene expression regulation: promoters, enhancers, transcription factors, epigenetics",
                "Cell signaling: receptor tyrosine kinases, GPCR, second messengers, MAPK pathway",
                "Cell cycle and apoptosis: G1, S, G2, M phases, checkpoints, p53 tumor suppressor"
              ],
              resources: [
                { name: "MIT OCW 7.012 – Introduction to Biology (Free)", url: "https://ocw.mit.edu/courses/7-012-introduction-to-biology-fall-2004/", type: "Free" },
                { name: "Khan Academy – AP Biology (Free)", url: "https://www.khanacademy.org/science/ap-biology", type: "Free" },
                { name: "Molecular Biology of the Cell – Alberts (Book)", url: "https://www.amazon.com/Molecular-Biology-Cell-Bruce-Alberts/dp/0393884821", type: "Book" }
              ],
              project: "Annotate 3 gene sequences using NCBI BLAST. Identify coding regions, promoters, and potential mutations. Write biological interpretation."
            },
            {
              day: 178,
              title: "Biochemistry, Enzymes & Metabolism",
              hours: "9h",
              topics: [
                "Biomolecules: carbohydrates, lipids, proteins (amino acids, folding), nucleic acids",
                "Enzyme kinetics: Michaelis-Menten, Lineweaver-Burk, competitive/non-competitive inhibition",
                "Metabolism: glycolysis, TCA cycle, oxidative phosphorylation, ATP yield",
                "Lipid metabolism: beta-oxidation, fatty acid synthesis, cholesterol biosynthesis",
                "Protein synthesis and post-translational modifications: phosphorylation, glycosylation",
                "Metabolomics: metabolite profiling, flux balance analysis"
              ],
              resources: [
                { name: "MIT OCW 5.07 – Biological Chemistry (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Biochemistry – Stryer, Berg & Tymoczko (Book)", url: "https://www.amazon.com/Biochemistry-Jeremy-Berg/dp/1319114652", type: "Book" }
              ],
              project: "Model enzyme kinetics in Python: plot Michaelis-Menten curves, calculate Km and Vmax from experimental data using curve fitting."
            },
            {
              day: 179,
              title: "Genetic Engineering & CRISPR",
              hours: "10h",
              topics: [
                "Recombinant DNA technology: restriction enzymes, ligases, vectors, cloning",
                "PCR: polymerase chain reaction — primers, Tm, cycles, variants (qPCR, RT-PCR)",
                "CRISPR-Cas9: mechanism — guide RNA, PAM sequence, DSB repair (NHEJ vs HDR)",
                "CRISPR applications: gene knockout, base editing, prime editing, CRISPRa/i",
                "Gene therapy: viral vectors (AAV, lentivirus), non-viral delivery, clinical trials",
                "Ethical issues: germline editing, designer babies, bioweapons — regulatory landscape"
              ],
              resources: [
                { name: "iBiology – CRISPR Lectures (Free)", url: "https://www.ibiology.org/", type: "Free" },
                { name: "Benchling – Free Molecular Biology Workspace", url: "https://www.benchling.com/", type: "Free" },
                { name: "A Crack in Creation – Jennifer Doudna (Book)", url: "https://www.amazon.com/Crack-Creation-Gene-Editing-Unthinkable/dp/0544716949", type: "Book" }
              ],
              project: "Design a CRISPR experiment to knock out a target gene: design gRNA (using Benchling/CRISPOR), predict off-targets, write experimental protocol."
            },
            {
              day: 180,
              title: "Bioinformatics & Computational Biology",
              hours: "10h",
              topics: [
                "Sequence analysis: FASTA/FASTQ format, BLAST, pairwise and multiple alignment (CLUSTAL, MUSCLE)",
                "Genome assembly: de novo (SPAdes) vs reference-based (BWA, Bowtie2)",
                "RNA-seq analysis pipeline: FastQC → STAR alignment → DESeq2 differential expression",
                "Protein structure: primary → quaternary, AlphaFold2 for structure prediction",
                "Phylogenetics: distance methods, maximum likelihood, Bayesian — MEGA software",
                "Biopython: SeqIO, BLAST parsing, PDB structure analysis"
              ],
              resources: [
                { name: "Bioinformatics Algorithms – Compeau & Pevzner (Free Online)", url: "https://bioinformaticsalgorithms.com/", type: "Free" },
                { name: "Rosalind – Bioinformatics Problem Set (Free)", url: "https://rosalind.info/", type: "Free" },
                { name: "AlphaFold – Free Protein Structure Prediction", url: "https://alphafold.ebi.ac.uk/", type: "Free" }
              ],
              project: "Complete 20 Rosalind bioinformatics problems. Run RNA-seq differential expression analysis. Predict protein structure with AlphaFold."
            },
            {
              day: 181,
              title: "Biomedical Engineering & Medical Devices",
              hours: "10h",
              topics: [
                "Biomechanics: bone mechanics, joint forces, prosthetics and orthotics design",
                "Biomaterials: biocompatibility, osseointegration, degradable vs non-degradable",
                "Medical imaging: X-ray, CT (Hounsfield units), MRI (T1/T2), ultrasound, PET physics",
                "Biosensors: electrochemical (glucose sensor), optical (pulse oximeter), piezoelectric",
                "Neural engineering: EEG, EMG, BCIs — signal processing for neural data",
                "Regulatory pathway: FDA 510(k), PMA, CE marking for medical devices"
              ],
              resources: [
                { name: "MIT OCW 20.441J – Biomaterials-Tissue Interactions (Free)", url: "https://ocw.mit.edu/", type: "Free" },
                { name: "Biomedical Engineering – Enderle & Bronzino (Book)", url: "https://www.amazon.com/Introduction-Biomedical-Engineering-John-Enderle/dp/0122386213", type: "Book" },
                { name: "3D Slicer – Free Medical Imaging Software", url: "https://www.slicer.org/", type: "Free" }
              ],
              project: "Segment a medical CT scan in 3D Slicer. Design a patient-specific implant in Fusion 360. Calculate biocompatibility requirements."
            },
            {
              day: 182,
              title: "Synthetic Biology, Drug Discovery & Biotech Industry",
              hours: "9h",
              topics: [
                "Synthetic biology: BioBrick standard, genetic circuits (toggle switch, oscillator)",
                "Drug discovery pipeline: target identification → hit discovery → lead optimization → IND → clinical trials",
                "High-throughput screening (HTS): assay development, DMSO tolerance, Z-factor",
                "Molecular docking: AutoDock Vina, ADMET properties, structure-activity relationships",
                "mRNA technology: LNP delivery, codon optimization — lessons from COVID vaccines",
                "Biotech industry: VC funding, biotech startup ecosystem, IP strategy (patents, trade secrets)"
              ],
              resources: [
                { name: "iGEM – International Genetically Engineered Machine (Free Resources)", url: "https://igem.org/", type: "Free" },
                { name: "AutoDock Vina – Free Molecular Docking", url: "https://vina.scripps.edu/", type: "Free" },
                { name: "Drug Discovery – Neidle (Book)", url: "https://www.amazon.com/Cancer-Drug-Design-Development-Discovery/dp/0123878853", type: "Book" }
              ],
              project: "Perform molecular docking of 5 drug candidates against a cancer target protein. Rank by binding energy. Write drug discovery report."
            },
            {
              day: 183,
              title: "Engineering Grand Capstone",
              hours: "12h",
              topics: ["Cross-discipline engineering project integrating all 5 fields"],
              resources: [],
              project: "GRAND CAPSTONE: Design a biomedical device that integrates all disciplines — mechanical housing (Fusion 360/FEA), electrical sensing circuit (KiCad/LTspice), embedded firmware (STM32/FreeRTOS), bioinformatics data pipeline (Python/Biopython), structural analysis — with full documentation, simulation results, and engineering report."
            }
          ]
        }
      ]
    },
    {
      id: 8,
      phase: "Phase 8",
      title: "Python & OpenCV: Computer Vision",
      color: "#06D6A0",
      accent: "#8EF9C8",
      duration: "Weeks 29–32",
      weeks: [
        {
          week: 29,
          title: "Python Foundations for Computer Vision",
          days: [
            {
              day: 184,
              title: "Python Environment & Core Syntax",
              hours: "9h",
              topics: [
                "Installing Python 3.11+, pip, virtual environments (venv/conda)",
                "Variables, data types: int, float, str, bool, list, dict, tuple, set",
                "Control flow: if/elif/else, for loops, while loops, break/continue",
                "Functions: def, return, *args, **kwargs, lambda",
                "File I/O: open(), read, write, with statement",
                "Python style: PEP8, type hints, docstrings"
              ],
              resources: [
                { name: "Python Official Tutorial – docs.python.org", url: "https://docs.python.org/3/tutorial/", type: "Free" },
                { name: "Automate the Boring Stuff with Python (Free Book)", url: "https://automatetheboringstuff.com/", type: "Free" },
                { name: "freeCodeCamp – Python for Beginners (4.5hr YouTube)", url: "https://www.youtube.com/watch?v=rfscVS0vtbw", type: "Free" }
              ],
              project: "Build a CLI tool that reads a folder of images and prints their filenames, sizes, and formats."
            },
            {
              day: 185,
              title: "NumPy: The Backbone of Computer Vision",
              hours: "9h",
              topics: [
                "NumPy arrays: ndarray, dtype, shape, ndim",
                "Array creation: zeros, ones, arange, linspace, random",
                "Array operations: slicing, indexing, broadcasting",
                "Mathematical operations: dot product, matrix multiply",
                "Images as NumPy arrays: understanding pixel grids",
                "Array stacking, splitting, reshaping"
              ],
              resources: [
                { name: "NumPy Official Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html", type: "Free" },
                { name: "YouTube: Keith Galli – NumPy Tutorial", url: "https://www.youtube.com/@KeithGalli", type: "Free" },
                { name: "Kaggle: NumPy Micro-Course", url: "https://www.kaggle.com/learn/", type: "Free" }
              ],
              project: "Manually implement image brightness/contrast adjustment using only NumPy (no OpenCV yet)."
            },
            {
              day: 186,
              title: "OpenCV Installation & Core Image Operations",
              hours: "10h",
              topics: [
                "Installing OpenCV: pip install opencv-python",
                "Reading, displaying, saving images: cv2.imread, imshow, imwrite",
                "Color spaces: BGR vs RGB, grayscale, HSV, LAB",
                "cv2.cvtColor: converting between color spaces",
                "Image properties: shape, size, dtype",
                "Drawing on images: rectangle, circle, line, putText"
              ],
              resources: [
                { name: "OpenCV Official Documentation", url: "https://docs.opencv.org/", type: "Free" },
                { name: "freeCodeCamp – OpenCV Course (3hr YouTube)", url: "https://www.youtube.com/watch?v=oXlwWbU8l2o", type: "Free" },
                { name: "PyImageSearch – OpenCV Tutorials", url: "https://pyimagesearch.com/", type: "Free/Paid" }
              ],
              project: "Build an image viewer app: load any image, display in multiple color spaces side by side, save each version."
            },
            {
              day: 187,
              title: "Image Processing: Filters & Transformations",
              hours: "10h",
              topics: [
                "Geometric transformations: resize, rotate, flip, translate, warp",
                "Blurring: Gaussian blur, median blur, bilateral filter",
                "Sharpening: Laplacian, unsharp masking",
                "Morphological operations: erosion, dilation, opening, closing",
                "Thresholding: binary, Otsu's method, adaptive thresholding",
                "Histograms: equalization, CLAHE"
              ],
              resources: [
                { name: "OpenCV Image Processing Docs", url: "https://docs.opencv.org/4.x/d2/dbd/tutorial_distance_transform.html", type: "Free" },
                { name: "YouTube: Murtaza's Workshop – OpenCV", url: "https://www.youtube.com/@murtazasworkshop", type: "Free" }
              ],
              project: "Build a photo filter app: apply 8 different filters to a live webcam feed with keyboard shortcuts."
            },
            {
              day: 188,
              title: "Edge Detection & Feature Extraction",
              hours: "9h",
              topics: [
                "Gradient-based edges: Sobel, Scharr, Prewitt operators",
                "Canny edge detector: non-maximum suppression, hysteresis",
                "Hough Line Transform: detecting straight lines",
                "Hough Circle Transform: detecting circles",
                "Contours: findContours, drawContours, contour hierarchy",
                "Contour properties: area, perimeter, bounding box, convex hull"
              ],
              resources: [
                { name: "OpenCV Canny Edge Tutorial", url: "https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html", type: "Free" },
                { name: "YouTube: Sentdex – OpenCV with Python", url: "https://www.youtube.com/@sentdex", type: "Free" }
              ],
              project: "Build a shape detector: identify and label circles, rectangles, and triangles in any image."
            },
            {
              day: 189,
              title: "Video Processing & Real-Time Analysis",
              hours: "10h",
              topics: [
                "VideoCapture: reading from webcam and video files",
                "VideoWriter: saving processed video output",
                "Frame-by-frame processing pipeline",
                "Background subtraction: MOG2, KNN algorithms",
                "Optical flow: Lucas-Kanade, Farneback",
                "FPS calculation and performance optimization"
              ],
              resources: [
                { name: "OpenCV Video Analysis Docs", url: "https://docs.opencv.org/4.x/d7/df8/tutorial_py_meanshift.html", type: "Free" },
                { name: "YouTube: Nicholas Renotte – Real-Time CV", url: "https://www.youtube.com/@nicholasrenotte", type: "Free" }
              ],
              project: "Build a motion detection security camera: highlight moving objects, log timestamps, save clips."
            },
            {
              day: 190,
              title: "Week 11 Capstone",
              hours: "10h",
              topics: ["Integrate all image and video processing skills"],
              resources: [
                { name: "GitHub: OpenCV Samples Repository", url: "https://github.com/opencv/opencv/tree/master/samples", type: "Free" }
              ],
              project: "CAPSTONE: Build a real-time 'Smart Camera' app — motion detection + color tracking + shape recognition + FPS overlay, all live from webcam."
            }
          ]
        },
        {
          week: 30,
          title: "Object Detection & Tracking",
          days: [
            {
              day: 191,
              title: "Traditional Object Detection: Template Matching & HOG",
              hours: "9h",
              topics: [
                "Template matching: cv2.matchTemplate, TM_CCOEFF_NORMED",
                "Multi-scale template matching",
                "HOG (Histogram of Oriented Gradients) feature descriptor",
                "SVM classifier with HOG for pedestrian detection",
                "Sliding window approach",
                "Non-maximum suppression (NMS)"
              ],
              resources: [
                { name: "PyImageSearch – HOG + SVM Tutorial", url: "https://pyimagesearch.com/", type: "Free" },
                { name: "OpenCV Object Detection Docs", url: "https://docs.opencv.org/4.x/df/d65/tutorial_table_of_content_objdetect.html", type: "Free" }
              ],
              project: "Build a pedestrian counter using HOG+SVM on a crowded street video."
            },
            {
              day: 192,
              title: "Haar Cascades & Face Detection",
              hours: "9h",
              topics: [
                "Viola-Jones algorithm: Haar features, integral image",
                "Pre-trained Haar cascades: face, eyes, smile, body",
                "Multi-scale detection: detectMultiScale parameters",
                "Face detection in images and live video",
                "Dlib face detector vs Haar cascade comparison",
                "Face alignment and landmark detection (68-point)"
              ],
              resources: [
                { name: "OpenCV Haar Cascade Tutorial", url: "https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html", type: "Free" },
                { name: "Dlib Official Documentation", url: "http://dlib.net/", type: "Free" }
              ],
              project: "Build a live face + eye + smile detector with confidence scores and bounding box labels."
            },
            {
              day: 193,
              title: "Deep Learning Object Detection: YOLO",
              hours: "10h",
              topics: [
                "Introduction to deep learning for CV: CNNs",
                "YOLO architecture: grid cells, bounding boxes, confidence",
                "YOLOv8 with Ultralytics: installation and inference",
                "Running YOLO on images, videos, and webcam",
                "Custom class detection and filtering",
                "Confidence thresholding and NMS tuning"
              ],
              resources: [
                { name: "Ultralytics YOLOv8 Docs", url: "https://docs.ultralytics.com/", type: "Free" },
                { name: "YouTube: Nicholas Renotte – YOLO Object Detection", url: "https://www.youtube.com/@nicholasrenotte", type: "Free" }
              ],
              project: "Build a real-time object detection app that counts and labels every object in a live webcam feed."
            },
            {
              day: 194,
              title: "Object Tracking Algorithms",
              hours: "9h",
              topics: [
                "OpenCV built-in trackers: CSRT, KCF, MOSSE, MIL",
                "Multi-object tracking with cv2.MultiTracker",
                "DeepSORT algorithm for track IDs across frames",
                "Kalman filter basics for motion prediction",
                "Re-identification after occlusion",
                "Tracking vs detection: when to use each"
              ],
              resources: [
                { name: "OpenCV Tracking API Docs", url: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html", type: "Free" },
                { name: "GitHub: abewley/sort – SORT Tracker", url: "https://github.com/abewley/sort", type: "Free" }
              ],
              project: "Build a vehicle tracking system that assigns IDs to cars and draws their movement trails."
            },
            {
              day: 195,
              title: "Facial Recognition System",
              hours: "10h",
              topics: [
                "Face encoding with face_recognition library (dlib-based)",
                "128-d face embeddings and cosine similarity",
                "Building a face database: encode + store",
                "Real-time face recognition from webcam",
                "Face recognition with DeepFace library",
                "Anti-spoofing: liveness detection concepts"
              ],
              resources: [
                { name: "face_recognition library – GitHub", url: "https://github.com/ageitgey/face_recognition", type: "Free" },
                { name: "DeepFace Library – GitHub", url: "https://github.com/serengil/deepface", type: "Free" },
                { name: "YouTube: Nicholas Renotte – Face Recognition", url: "https://www.youtube.com/@nicholasrenotte", type: "Free" }
              ],
              project: "Build a real-time facial recognition attendance system with name tags and log file export."
            },
            {
              day: 196,
              title: "Pose Estimation & Body Keypoints",
              hours: "9h",
              topics: [
                "MediaPipe Pose: 33-landmark skeleton model",
                "Real-time pose estimation from webcam",
                "Angle calculation between joints: elbow, knee, hip",
                "MediaPipe Hands: 21-landmark hand model",
                "Gesture recognition using landmark geometry",
                "MediaPipe Face Mesh: 468 facial landmarks"
              ],
              resources: [
                { name: "MediaPipe Official Docs – Google", url: "https://developers.google.com/mediapipe", type: "Free" },
                { name: "YouTube: Murtaza's Workshop – MediaPipe", url: "https://www.youtube.com/@murtazasworkshop", type: "Free" }
              ],
              project: "Build an AI fitness coach: detect squats/push-ups by counting reps using joint angles live."
            },
            {
              day: 197,
              title: "Week 12 Capstone",
              hours: "10h",
              topics: ["Full intelligent surveillance system"],
              resources: [],
              project: "CAPSTONE: Build an intelligent CCTV system — YOLO detection + DeepSORT tracking + face recognition + pose estimation + motion alerts — all running on live video."
            }
          ]
        },
        {
          week: 31,
          title: "Advanced OpenCV: 3D Vision & AI Integration",
          days: [
            {
              day: 198,
              title: "Camera Calibration & 3D Vision",
              hours: "9h",
              topics: [
                "Camera model: intrinsic matrix, distortion coefficients",
                "Chessboard calibration: cv2.calibrateCamera",
                "Undistortion: removing lens distortion",
                "Stereo vision: epipolar geometry, disparity maps",
                "Depth estimation from stereo pairs",
                "3D point reconstruction from 2D images"
              ],
              resources: [
                { name: "OpenCV Camera Calibration Tutorial", url: "https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html", type: "Free" }
              ],
              project: "Calibrate a webcam using a printed chessboard. Measure real-world distances in images."
            },
            {
              day: 199,
              title: "Augmented Reality with OpenCV",
              hours: "10h",
              topics: [
                "ArUco markers: detection, ID reading, pose estimation",
                "Homography: projecting 2D images onto surfaces",
                "Perspective transform: birds-eye view",
                "Overlaying virtual objects on real surfaces",
                "AR cube drawing on marker planes",
                "solvePnP for accurate 3D object pose"
              ],
              resources: [
                { name: "OpenCV ArUco Marker Tutorial", url: "https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html", type: "Free" },
                { name: "YouTube: Murtaza's Workshop – AR with OpenCV", url: "https://www.youtube.com/@murtazasworkshop", type: "Free" }
              ],
              project: "Build an AR app: scan a printed ArUco marker and overlay a 3D rotating cube on it in real time."
            },
            {
              day: 200,
              title: "Optical Character Recognition (OCR)",
              hours: "9h",
              topics: [
                "Tesseract OCR: installation and Python binding (pytesseract)",
                "Image preprocessing for OCR: deskew, denoise, binarize",
                "EasyOCR: deep learning based multi-language OCR",
                "Document layout analysis",
                "License plate recognition pipeline",
                "Receipt and invoice parsing"
              ],
              resources: [
                { name: "pytesseract GitHub + Docs", url: "https://github.com/madmaze/pytesseract", type: "Free" },
                { name: "EasyOCR GitHub", url: "https://github.com/JaidedAI/EasyOCR", type: "Free" },
                { name: "YouTube: PyImageSearch – ANPR", url: "https://pyimagesearch.com/", type: "Free/Paid" }
              ],
              project: "Build an automatic license plate recognition (ANPR) system from video footage."
            },
            {
              day: 201,
              title: "Image Segmentation",
              hours: "10h",
              topics: [
                "Semantic segmentation with DeepLab/SegNet",
                "Instance segmentation with Mask R-CNN",
                "GrabCut interactive segmentation",
                "Watershed algorithm for touching objects",
                "SAM (Segment Anything Model) by Meta",
                "Background removal pipeline"
              ],
              resources: [
                { name: "Segment Anything Model – Meta AI", url: "https://segment-anything.com/", type: "Free" },
                { name: "YouTube: Nicholas Renotte – Image Segmentation", url: "https://www.youtube.com/@nicholasrenotte", type: "Free" }
              ],
              project: "Build a background removal tool using SAM — click any object in an image to extract it perfectly."
            },
            {
              day: 202,
              title: "Training a Custom Object Detector",
              hours: "10h",
              topics: [
                "Dataset collection: web scraping + manual images",
                "Annotation with Roboflow or LabelImg",
                "YOLO custom training: data.yaml, epochs, batch size",
                "Transfer learning: fine-tuning pretrained weights",
                "Training metrics: mAP, precision, recall",
                "Exporting to ONNX, TFLite, CoreML"
              ],
              resources: [
                { name: "Roboflow – Free Dataset Annotation & Training", url: "https://roboflow.com/", type: "Free" },
                { name: "Ultralytics YOLOv8 Training Guide", url: "https://docs.ultralytics.com/modes/train/", type: "Free" }
              ],
              project: "Train a custom YOLO model to detect a specific object of your choice (e.g., hard hats, defects, custom signs)."
            },
            {
              day: 203,
              title: "Depth Estimation & LiDAR Simulation",
              hours: "9h",
              topics: [
                "Monocular depth estimation: MiDaS model",
                "Intel RealSense depth camera integration",
                "PointCloud generation from depth maps",
                "Open3D library for 3D point cloud visualization",
                "SLAM concepts: simultaneous localization and mapping",
                "Applications: autonomous vehicles, robotics"
              ],
              resources: [
                { name: "MiDaS GitHub – Intel ISL", url: "https://github.com/isl-org/MiDaS", type: "Free" },
                { name: "Open3D Documentation", url: "http://www.open3d.org/", type: "Free" }
              ],
              project: "Run MiDaS depth estimation on a video. Colorize depth map and visualize 3D point cloud."
            },
            {
              day: 204,
              title: "Phase 5 Capstone: Full CV Pipeline",
              hours: "12h",
              topics: ["Combine all computer vision skills into one production system"],
              resources: [
                { name: "GitHub: Real-World OpenCV Projects Collection", url: "https://github.com/topics/opencv-python", type: "Free" }
              ],
              project: "CAPSTONE: Build a Smart Retail Analytics System — customer counting (tracking), age/gender estimation (DeepFace), product pickup detection (YOLO), dwell time analysis — export daily CSV report."
            }
          ]
        },
        {
          week: 32,
          title: "Computer Vision Applications & Deployment",
          days: [
            {
              day: 205,
              title: "OpenCV with Deep Learning: TensorFlow & PyTorch",
              hours: "10h",
              topics: [
                "TensorFlow/Keras: loading pretrained models (MobileNet, EfficientNet)",
                "PyTorch torchvision: transforms, datasets, models",
                "cv2.dnn module: running inference directly in OpenCV",
                "Model optimization: TensorRT, ONNX Runtime",
                "Benchmarking: CPU vs GPU inference speed",
                "Model quantization and pruning basics"
              ],
              resources: [
                { name: "TensorFlow Official Tutorials", url: "https://www.tensorflow.org/tutorials", type: "Free" },
                { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "Free" }
              ],
              project: "Build an image classifier using MobileNetV3 — classify 1000 ImageNet categories in real time."
            },
            {
              day: 206,
              title: "Generative AI for Computer Vision",
              hours: "9h",
              topics: [
                "GANs overview: generator vs discriminator",
                "Style transfer with neural networks",
                "Stable Diffusion img2img for CV enhancement",
                "Inpainting: removing objects from images",
                "Super resolution: ESRGAN, Real-ESRGAN",
                "Deepfake detection using CNN classifiers"
              ],
              resources: [
                { name: "Real-ESRGAN GitHub", url: "https://github.com/xinntao/Real-ESRGAN", type: "Free" },
                { name: "YouTube: Computerphile – GAN Explained", url: "https://www.youtube.com/@Computerphile", type: "Free" }
              ],
              project: "Build an image enhancer: upscale low-res images 4x using Real-ESRGAN + remove artifacts."
            },
            {
              day: 207,
              title: "Deploying CV Apps: Flask & FastAPI",
              hours: "9h",
              topics: [
                "Flask: building a REST API around OpenCV functions",
                "FastAPI: async endpoints for video stream processing",
                "WebSocket streaming: real-time video in browser",
                "Docker containerization of CV applications",
                "Cloud deployment: AWS Lambda, Google Cloud Run",
                "Edge deployment: Raspberry Pi, NVIDIA Jetson"
              ],
              resources: [
                { name: "FastAPI Official Docs", url: "https://fastapi.tiangolo.com/", type: "Free" },
                { name: "YouTube: Patrick Loeber – FastAPI Tutorial", url: "https://www.youtube.com/@patloeber", type: "Free" }
              ],
              project: "Deploy your face recognition system as a web API with a live video stream in the browser."
            },
            {
              day: 208,
              title: "CV for Medical Imaging",
              hours: "9h",
              topics: [
                "Medical image formats: DICOM with pydicom",
                "X-ray and MRI preprocessing techniques",
                "Tumor/lesion detection with YOLO on medical data",
                "Chest X-ray classification: pneumonia detection",
                "Skin lesion segmentation with U-Net",
                "Ethics and regulations in medical AI"
              ],
              resources: [
                { name: "Kaggle: Chest X-Ray Images (Pneumonia)", url: "https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia", type: "Free" },
                { name: "Medical Image Segmentation – Papers with Code", url: "https://paperswithcode.com/task/medical-image-segmentation", type: "Free" }
              ],
              project: "Train a pneumonia detection classifier on chest X-ray dataset. Achieve >90% validation accuracy."
            },
            {
              day: 209,
              title: "Autonomous Systems & Robotics Vision",
              hours: "10h",
              topics: [
                "Lane detection for autonomous driving",
                "Traffic sign recognition pipeline",
                "Bird's eye view transformation for self-driving",
                "ROS (Robot Operating System) basics",
                "CV integration with Arduino/Raspberry Pi",
                "Drone vision: ArUco marker landing pads"
              ],
              resources: [
                { name: "Udacity Self-Driving Car Nanodegree (Free Preview)", url: "https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013", type: "Paid" },
                { name: "YouTube: sentdex – Autonomous RC Car", url: "https://www.youtube.com/@sentdex", type: "Free" }
              ],
              project: "Build a lane detection system from dashcam footage: detect, highlight, and measure lane curvature."
            },
            {
              day: 210,
              title: "Phase 5 Final Review & Portfolio",
              hours: "9h",
              topics: [
                "GitHub repository organization for CV projects",
                "Writing technical blog posts on Medium/Dev.to",
                "Kaggle competitions for computer vision",
                "CV engineer job market: roles, salaries, companies",
                "GitHub README writing for CV projects"
              ],
              resources: [
                { name: "Kaggle Competitions – Computer Vision", url: "https://www.kaggle.com/competitions?search=computer+vision", type: "Free" },
                { name: "Papers With Code – State of the Art CV", url: "https://paperswithcode.com/", type: "Free" }
              ],
              project: "Publish all CV projects to GitHub with polished READMEs. Write one technical blog post. Submit one Kaggle competition entry."
            },
            {
              day: 211,
              title: "Phase 5 Grand Capstone",
              hours: "12h",
              topics: ["Final integrated computer vision application"],
              resources: [],
              project: "GRAND CAPSTONE: Build and deploy a complete AI-powered video analytics platform with 5 features (detection, tracking, recognition, OCR, segmentation), deployed as a live web app with FastAPI + Docker."
            }
          ]
        }
      ]
    },
    {
      id: 9,
      phase: "Phase 9",
      title: "Quantum Computing",
      color: "#FF006E",
      accent: "#FF79C6",
      duration: "Weeks 33–38",
      weeks: [
        {
          week: 33,
          title: "Quantum Mechanics & Mathematical Foundations",
          days: [
            {
              day: 212,
              title: "Linear Algebra for Quantum Computing",
              hours: "9h",
              topics: [
                "Complex numbers: imaginary unit, polar form, Euler's formula",
                "Vectors and vector spaces over complex numbers",
                "Inner product, outer product, tensor product (⊗)",
                "Matrices: identity, Hermitian, unitary, Pauli matrices (X, Y, Z)",
                "Eigenvalues and eigenvectors",
                "Bra-ket (Dirac) notation: |ψ⟩, ⟨ψ|, ⟨ψ|φ⟩"
              ],
              resources: [
                { name: "3Blue1Brown – Essence of Linear Algebra (YouTube)", url: "https://www.youtube.com/@3blue1brown", type: "Free" },
                { name: "Quantum Computing: An Applied Approach (Book – Jack Hidary)", url: "https://www.amazon.com/Quantum-Computing-Applied-Jack-Hidary/dp/3030832740", type: "Book" },
                { name: "Khan Academy – Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", type: "Free" }
              ],
              project: "Implement Pauli matrices and verify their properties (hermitian, unitary, eigenvalues) using NumPy."
            },
            {
              day: 213,
              title: "Quantum Mechanics Fundamentals",
              hours: "9h",
              topics: [
                "Postulates of quantum mechanics",
                "Wave functions and probability amplitudes",
                "Superposition principle: being in multiple states simultaneously",
                "Measurement: wavefunction collapse, Born rule",
                "Heisenberg uncertainty principle",
                "Schrödinger equation (conceptual, not derivation)"
              ],
              resources: [
                { name: "MIT OpenCourseWare – Quantum Physics I (8.04)", url: "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/", type: "Free" },
                { name: "Quantum Country (Free Interactive Textbook)", url: "https://quantum.country/", type: "Free" },
                { name: "YouTube: PBS Space Time – Quantum Mechanics Series", url: "https://www.youtube.com/@pbsspacetime", type: "Free" }
              ],
              project: "Write explanations of 5 quantum phenomena with mathematical notation. Simulate superposition with NumPy."
            },
            {
              day: 214,
              title: "Qubits: The Building Block of Quantum Computing",
              hours: "10h",
              topics: [
                "Classical bit vs qubit: 0, 1, vs |0⟩+|1⟩",
                "Bloch sphere: geometric representation of a qubit",
                "Single-qubit state: α|0⟩ + β|1⟩, |α|²+|β|²=1",
                "Physical implementations: superconducting qubits, trapped ions, photonic",
                "Decoherence and noise: the engineering challenge",
                "Qiskit installation: IBM's quantum framework"
              ],
              resources: [
                { name: "Qiskit Textbook – IBM (Free Online)", url: "https://learning.quantum.ibm.com/", type: "Free" },
                { name: "IBM Quantum Learning Platform", url: "https://learning.quantum.ibm.com/", type: "Free" }
              ],
              project: "Create and visualize qubits on the Bloch sphere using Qiskit. Explore all 6 Bloch sphere poles."
            },
            {
              day: 215,
              title: "Quantum Gates: Single-Qubit Operations",
              hours: "10h",
              topics: [
                "NOT gate (X gate): flipping qubit state",
                "Hadamard gate (H): creating superposition",
                "Phase gates: S, T, Z gates",
                "Rotation gates: Rx, Ry, Rz — parameterized rotations",
                "Arbitrary single-qubit unitaries",
                "Gate composition and circuit depth concepts"
              ],
              resources: [
                { name: "Qiskit – Single Qubit Gates Tutorial", url: "https://learning.quantum.ibm.com/course/basics-of-quantum-information/single-systems", type: "Free" },
                { name: "YouTube: Quantum Soar – Quantum Gates", url: "https://www.youtube.com/", type: "Free" }
              ],
              project: "Build all single-qubit gates in Qiskit. Verify with statevector simulation. Visualize on Bloch sphere."
            },
            {
              day: 216,
              title: "Multi-Qubit Systems & Entanglement",
              hours: "10h",
              topics: [
                "Multi-qubit systems: tensor products of states",
                "2-qubit computational basis: |00⟩, |01⟩, |10⟩, |11⟩",
                "CNOT gate (CX): controlled-NOT, the entangling gate",
                "Bell states: the 4 maximally entangled states",
                "Einstein-Podolsky-Rosen (EPR) paradox",
                "Toffoli gate (CCX): quantum AND gate"
              ],
              resources: [
                { name: "Qiskit – Multiple Qubits and Entanglement", url: "https://learning.quantum.ibm.com/course/basics-of-quantum-information/multiple-systems", type: "Free" },
                { name: "Quantum Country – Entanglement Module", url: "https://quantum.country/", type: "Free" }
              ],
              project: "Create all 4 Bell states in Qiskit. Measure correlations to prove entanglement. Visualize state vectors."
            },
            {
              day: 217,
              title: "Quantum Circuits & Measurement",
              hours: "9h",
              topics: [
                "Quantum circuit model: building with gates and wires",
                "Measurement in different bases: Z, X, Y basis",
                "Quantum circuit depth, width, and T-count",
                "Circuit optimization and transpilation",
                "Qiskit QuantumCircuit API: deep dive",
                "Running on real IBM quantum hardware"
              ],
              resources: [
                { name: "IBM Quantum Network – Free Real Hardware Access", url: "https://quantum.ibm.com/", type: "Free" },
                { name: "Qiskit Circuit Documentation", url: "https://docs.quantum.ibm.com/api/qiskit/circuit", type: "Free" }
              ],
              project: "Design a 5-qubit quantum circuit. Run it on IBM real quantum hardware. Compare ideal vs noisy results."
            },
            {
              day: 218,
              title: "Week 15 Capstone",
              hours: "10h",
              topics: ["Quantum teleportation protocol"],
              resources: [
                { name: "Qiskit – Quantum Teleportation Tutorial", url: "https://learning.quantum.ibm.com/tutorial/quantum-teleportation", type: "Free" }
              ],
              project: "CAPSTONE: Implement quantum teleportation from scratch in Qiskit. Transmit an arbitrary qubit state across entanglement. Verify fidelity."
            }
          ]
        },
        {
          week: 34,
          title: "Quantum Algorithms",
          days: [
            {
              day: 219,
              title: "Quantum Interference & Algorithm Design",
              hours: "9h",
              topics: [
                "Constructive vs destructive interference in quantum circuits",
                "Phase kickback: the core trick behind many algorithms",
                "Oracle functions: quantum black boxes",
                "Quantum parallelism: evaluating all inputs simultaneously",
                "Amplitude amplification: the foundation of quantum speedup",
                "Quantum complexity theory: BQP class"
              ],
              resources: [
                { name: "Qiskit Textbook – Quantum Protocols & Algorithms", url: "https://learning.quantum.ibm.com/", type: "Free" },
                { name: "Nielsen & Chuang – Quantum Computation and Quantum Information (Book)", url: "https://www.amazon.com/Quantum-Computation-Information-10th-Anniversary/dp/1107002176", type: "Book" }
              ],
              project: "Implement and visualize the Deutsch-Jozsa algorithm — the first quantum algorithm to beat classical."
            },
            {
              day: 220,
              title: "Grover's Search Algorithm",
              hours: "10h",
              topics: [
                "Grover's algorithm: O(√N) search vs classical O(N)",
                "Oracle construction for search problems",
                "Grover diffusion operator (amplitude amplification)",
                "Optimal number of iterations: π/4 × √N",
                "Multi-solution Grover's algorithm",
                "Applications: satisfiability, database search, optimization"
              ],
              resources: [
                { name: "Qiskit – Grover's Algorithm Tutorial", url: "https://learning.quantum.ibm.com/tutorial/grovers-algorithm", type: "Free" },
                { name: "YouTube: Qiskit – Grover's Explained", url: "https://www.youtube.com/@qiskit", type: "Free" }
              ],
              project: "Implement Grover's algorithm to search a 4-qubit (16-item) database. Verify quadratic speedup empirically."
            },
            {
              day: 221,
              title: "Shor's Algorithm & Quantum Cryptography",
              hours: "10h",
              topics: [
                "RSA encryption: mathematical foundation",
                "Period finding: the quantum subroutine of Shor's",
                "Quantum Fourier Transform (QFT): the key primitive",
                "Shor's algorithm overview: factoring in polynomial time",
                "Why Shor's threatens RSA and current encryption",
                "Post-quantum cryptography: NIST standards (CRYSTALS-Kyber, Dilithium)"
              ],
              resources: [
                { name: "Qiskit – Shor's Algorithm Tutorial", url: "https://learning.quantum.ibm.com/tutorial/shors-algorithm", type: "Free" },
                { name: "NIST Post-Quantum Cryptography Standards", url: "https://www.nist.gov/cybersecurity/post-quantum-cryptography", type: "Free" }
              ],
              project: "Implement the Quantum Fourier Transform in Qiskit. Run small-instance Shor's (factor 15, 21)."
            },
            {
              day: 222,
              title: "Variational Quantum Algorithms (VQA)",
              hours: "9h",
              topics: [
                "NISQ era: noisy intermediate-scale quantum computers",
                "Variational Quantum Eigensolver (VQE): finding ground states",
                "QAOA (Quantum Approximate Optimization Algorithm)",
                "Parameterized quantum circuits (ansatz design)",
                "Classical-quantum hybrid loops",
                "Barren plateaus: the training challenge"
              ],
              resources: [
                { name: "Qiskit – VQE Tutorial", url: "https://learning.quantum.ibm.com/tutorial/variational-quantum-eigensolver", type: "Free" },
                { name: "PennyLane – Variational Algorithms Demos", url: "https://pennylane.ai/qml/demonstrations/", type: "Free" }
              ],
              project: "Implement QAOA to solve the Max-Cut problem on a graph. Compare with classical greedy solution."
            },
            {
              day: 223,
              title: "Quantum Machine Learning",
              hours: "10h",
              topics: [
                "Quantum data encoding: amplitude, angle, basis encoding",
                "Quantum kernel methods: quantum support vector machines",
                "Quantum neural networks (QNN): PennyLane implementation",
                "Quantum transfer learning",
                "Quantum advantage claims: when does QML help?",
                "Hybrid classical-quantum neural networks"
              ],
              resources: [
                { name: "PennyLane QML Tutorials – Xanadu", url: "https://pennylane.ai/qml/", type: "Free" },
                { name: "Qiskit Machine Learning Documentation", url: "https://qiskit-machine-learning.readthedocs.io/", type: "Free" }
              ],
              project: "Build a hybrid QNN image classifier (small dataset) using PennyLane + PyTorch."
            },
            {
              day: 224,
              title: "Quantum Error Correction",
              hours: "9h",
              topics: [
                "Why quantum error correction is necessary: decoherence",
                "Bit flip code: the simplest error correcting code",
                "Phase flip code",
                "Shor's 9-qubit code: first general QEC",
                "Stabilizer codes: CSS codes, surface codes",
                "Fault-tolerant quantum computation threshold theorem"
              ],
              resources: [
                { name: "Qiskit – Error Correction Tutorial", url: "https://learning.quantum.ibm.com/course/quantum-error-correction", type: "Free" },
                { name: "YouTube: IBM Research – Quantum Error Correction", url: "https://www.youtube.com/@IBMResearch", type: "Free" }
              ],
              project: "Implement the 3-qubit bit flip code in Qiskit. Introduce errors and demonstrate correction."
            },
            {
              day: 225,
              title: "Week 16 Algorithms Capstone",
              hours: "10h",
              topics: ["Full quantum algorithm implementation suite"],
              resources: [],
              project: "CAPSTONE: Implement a quantum algorithm portfolio — Deutsch-Jozsa, Grover's, QFT, QAOA — with full documentation, complexity analysis, and classical comparison."
            }
          ]
        },
        {
          week: 35,
          title: "Quantum Hardware & Advanced Topics",
          days: [
            {
              day: 226,
              title: "Quantum Hardware Deep Dive",
              hours: "9h",
              topics: [
                "Superconducting qubits: transmon, flux qubit",
                "Trapped ion quantum computers: IonQ, Quantinuum",
                "Photonic quantum computing: PsiQuantum approach",
                "Neutral atom platforms: QuEra Computing",
                "Dilution refrigerators: cooling to 15 millikelvin",
                "Gate fidelity, T1/T2 coherence times comparison"
              ],
              resources: [
                { name: "IBM Quantum Hardware Documentation", url: "https://docs.quantum.ibm.com/", type: "Free" },
                { name: "YouTube: Veritasium – How Quantum Computers Work", url: "https://www.youtube.com/@veritasium", type: "Free" },
                { name: "arXiv: Quantum Hardware Review Papers", url: "https://arxiv.org/", type: "Free" }
              ],
              project: "Compare 3 quantum hardware platforms across: qubit count, coherence time, gate fidelity, connectivity. Visualize as a technical comparison chart."
            },
            {
              day: 227,
              title: "Other Quantum Frameworks: Cirq, PennyLane, Braket",
              hours: "9h",
              topics: [
                "Google Cirq: native gate sets for Google Sycamore",
                "Amazon Braket: cloud access to multiple QPUs",
                "Microsoft Azure Quantum: Q# language overview",
                "PennyLane: differentiable quantum programming",
                "Framework comparison: when to use which",
                "Quantum cloud services pricing and access"
              ],
              resources: [
                { name: "Google Cirq Documentation", url: "https://quantumai.google/cirq", type: "Free" },
                { name: "PennyLane Documentation – Xanadu", url: "https://docs.pennylane.ai/", type: "Free" },
                { name: "Amazon Braket Developer Guide", url: "https://docs.aws.amazon.com/braket/", type: "Free" }
              ],
              project: "Implement the same Bell state circuit in Qiskit, Cirq, and PennyLane. Document syntax differences."
            },
            {
              day: 228,
              title: "Quantum Simulation of Physical Systems",
              hours: "10h",
              topics: [
                "Quantum simulation: the original motivation for QC (Feynman)",
                "Hamiltonian simulation: Trotter decomposition",
                "Simulating hydrogen molecule with VQE",
                "Quantum chemistry: molecular energy estimation",
                "Materials science applications: new materials discovery",
                "Drug discovery with quantum simulation"
              ],
              resources: [
                { name: "Qiskit Nature – Quantum Chemistry Module", url: "https://qiskit-community.github.io/qiskit-nature/", type: "Free" },
                { name: "YouTube: IBM Quantum – Chemistry on Quantum", url: "https://www.youtube.com/@qiskit", type: "Free" }
              ],
              project: "Calculate ground state energy of H₂ molecule using VQE in Qiskit Nature. Compare with classical result."
            },
            {
              day: 229,
              title: "Quantum Cryptography & Communication",
              hours: "9h",
              topics: [
                "Quantum key distribution (QKD): BB84 protocol",
                "No-cloning theorem: why quantum info can't be copied",
                "Quantum random number generation (QRNG)",
                "Quantum networks and quantum internet vision",
                "Quantum repeaters and entanglement distribution",
                "E91 protocol: entanglement-based QKD"
              ],
              resources: [
                { name: "Qiskit – BB84 QKD Tutorial", url: "https://learning.quantum.ibm.com/tutorial/bb84", type: "Free" },
                { name: "YouTube: Minute Physics – Quantum Cryptography", url: "https://www.youtube.com/@minutephysics", type: "Free" }
              ],
              project: "Simulate the BB84 QKD protocol in Qiskit. Demonstrate eavesdropper detection mechanism."
            },
            {
              day: 230,
              title: "Quantum Optimization: Real-World Problems",
              hours: "10h",
              topics: [
                "Combinatorial optimization: traveling salesman, portfolio optimization",
                "QUBO formulation: quadratic unconstrained binary optimization",
                "D-Wave quantum annealers: adiabatic quantum computing",
                "QAOA for logistics and scheduling",
                "Quantum finance: risk analysis, option pricing",
                "Quantum supply chain optimization case study"
              ],
              resources: [
                { name: "D-Wave Ocean SDK Documentation", url: "https://docs.ocean.dwavesys.com/", type: "Free" },
                { name: "Qiskit Optimization Module", url: "https://qiskit-community.github.io/qiskit-optimization/", type: "Free" }
              ],
              project: "Formulate and solve a portfolio optimization problem using QAOA. Compare with classical Markowitz model."
            },
            {
              day: 231,
              title: "Quantum Software Engineering",
              hours: "9h",
              topics: [
                "Quantum circuit testing and verification",
                "Quantum debugging: state tomography",
                "Benchmarking quantum devices: RB, XEB",
                "Quantum software development best practices",
                "Noise models: depolarizing, bit flip, amplitude damping",
                "Qiskit Aer noise simulation"
              ],
              resources: [
                { name: "Qiskit Aer Documentation – Noise Simulation", url: "https://qiskit.github.io/qiskit-aer/", type: "Free" },
                { name: "Mitiq – Open Source Error Mitigation", url: "https://mitiq.readthedocs.io/", type: "Free" }
              ],
              project: "Build a test suite for quantum circuits. Use state tomography to verify your teleportation circuit is correct."
            },
            {
              day: 232,
              title: "Quantum Computing Industry & Career",
              hours: "8h",
              topics: [
                "Industry landscape: IBM, Google, IonQ, Quantinuum, PsiQuantum, Rigetti",
                "Quantum computing timeline: when is quantum advantage?",
                "Career paths: quantum engineer, QC researcher, quantum software developer",
                "Top universities and research groups",
                "Quantum computing conferences: QIP, IEEE Quantum Week",
                "Open source contributions to Qiskit, PennyLane, Cirq"
              ],
              resources: [
                { name: "McKinsey – Quantum Technology Industry Report", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/quantum-technology", type: "Free" },
                { name: "arXiv quant-ph – Latest Research Preprints", url: "https://arxiv.org/list/quant-ph/recent", type: "Free" }
              ],
              project: "Write a 1,000-word industry analysis: where is quantum computing in 2025, and what will matter in 2030?"
            }
          ]
        },
        {
          week: 36,
          title: "Advanced Quantum Algorithms & Research",
          days: [
            {
              day: 233,
              title: "Quantum Fourier Transform Applications",
              hours: "10h",
              topics: [
                "QFT: full derivation and circuit construction",
                "Inverse QFT",
                "Phase estimation algorithm (QPE)",
                "Quantum phase estimation applications",
                "Hidden subgroup problem: generalizing Shor's",
                "Simon's algorithm: exponential speedup"
              ],
              resources: [
                { name: "Qiskit – Quantum Phase Estimation Tutorial", url: "https://learning.quantum.ibm.com/", type: "Free" }
              ],
              project: "Implement QPE to estimate the eigenphase of a unitary matrix. Verify precision vs qubit count."
            },
            {
              day: 234,
              title: "Quantum Walk Algorithms",
              hours: "9h",
              topics: [
                "Classical random walk vs quantum walk",
                "Discrete quantum walk: coin operator + shift operator",
                "Continuous quantum walk",
                "Quantum walk-based search: Ambainis algorithm",
                "Graph problems via quantum walks",
                "Quantum walk on complete graph"
              ],
              resources: [
                { name: "arXiv: Introduction to Quantum Walks", url: "https://arxiv.org/abs/0801.0861", type: "Free" }
              ],
              project: "Implement discrete quantum walk on a line in Qiskit. Compare probability distribution with classical walk."
            },
            {
              day: 235,
              title: "HHL Algorithm: Quantum Linear Systems",
              hours: "10h",
              topics: [
                "The HHL algorithm: solving Ax=b exponentially faster",
                "Quantum matrix inversion",
                "Condition number and sparsity requirements",
                "Applications: machine learning, differential equations",
                "Limitations and dequantization: when HHL doesn't help",
                "Quantum singular value transformation (QSVT)"
              ],
              resources: [
                { name: "Qiskit – HHL Tutorial", url: "https://learning.quantum.ibm.com/tutorial/solving-linear-systems-of-equations-using-hhl-and-its-qiskit-implementation", type: "Free" }
              ],
              project: "Implement HHL on a 2x2 linear system. Verify solution matches classical NumPy linalg.solve."
            },
            {
              day: 236,
              title: "Quantum Annealing & Adiabatic QC",
              hours: "9h",
              topics: [
                "Adiabatic theorem: slowly evolving Hamiltonian",
                "Adiabatic quantum computation model",
                "Ising model: spin systems and optimization",
                "QUBO → Ising mapping",
                "D-Wave architecture and embedding",
                "Comparison: gate-based vs annealing"
              ],
              resources: [
                { name: "D-Wave Leap Platform (Free Access)", url: "https://cloud.dwavesys.com/leap/", type: "Free" },
                { name: "D-Wave Ocean SDK Getting Started", url: "https://docs.ocean.dwavesys.com/en/stable/getting_started.html", type: "Free" }
              ],
              project: "Formulate and solve graph coloring using D-Wave Ocean SDK on the Leap cloud platform."
            },
            {
              day: 237,
              title: "Quantum Advantage: Real Experiments",
              hours: "9h",
              topics: [
                "Google's quantum supremacy experiment (Sycamore, 2019)",
                "China's Jiuzhang photonic quantum advantage",
                "IBM's 127-qubit Eagle processor benchmarks",
                "Utility-scale quantum: beyond simulation",
                "Criticism and skepticism: classical simulation improvements",
                "What genuine quantum advantage looks like"
              ],
              resources: [
                { name: "Nature: Google Quantum Supremacy Paper", url: "https://www.nature.com/articles/s41586-019-1666-5", type: "Free" },
                { name: "IBM Research Blog – Quantum Utility", url: "https://research.ibm.com/blog", type: "Free" }
              ],
              project: "Read and summarize 2 peer-reviewed quantum advantage papers. Write a critical analysis comparing claims."
            },
            {
              day: 238,
              title: "Quantum Internet & Distributed Quantum Computing",
              hours: "9h",
              topics: [
                "Quantum internet stack: physical to application layer",
                "Entanglement distribution over long distances",
                "Quantum memory: storing qubits",
                "Quantum repeaters: overcoming distance limits",
                "Distributed quantum computing protocols",
                "QuTiP: quantum toolbox for open systems"
              ],
              resources: [
                { name: "QuTiP Documentation", url: "https://qutip.org/", type: "Free" },
                { name: "Quantum Internet Alliance", url: "https://quantum-internet.team/", type: "Free" }
              ],
              project: "Simulate entanglement purification protocol using QuTiP. Demonstrate fidelity improvement."
            },
            {
              day: 239,
              title: "Phase 6 Research Day",
              hours: "10h",
              topics: ["Independent quantum algorithm research", "Novel application exploration"],
              resources: [
                { name: "arXiv quant-ph Daily Listings", url: "https://arxiv.org/list/quant-ph/recent", type: "Free" }
              ],
              project: "Read 3 recent arXiv papers in quantum computing. Implement one algorithm from a paper in Qiskit."
            }
          ]
        },
        {
          week: 37,
          title: "Quantum + AI Convergence",
          days: [
            {
              day: 240,
              title: "Quantum Neural Networks: Architecture Design",
              hours: "10h",
              topics: [
                "Quantum circuit Born machines",
                "Variational quantum classifiers (VQC)",
                "Data re-uploading technique",
                "Expressibility and entanglement capability of ansatz",
                "Training QNNs: parameter shift rule for gradients",
                "Quantum convolutional neural networks (QCNN)"
              ],
              resources: [
                { name: "PennyLane – QNN Tutorials", url: "https://pennylane.ai/qml/demonstrations/#quantum-machine-learning", type: "Free" },
                { name: "TensorFlow Quantum Documentation", url: "https://www.tensorflow.org/quantum", type: "Free" }
              ],
              project: "Train a QNN to classify the Iris dataset using PennyLane. Compare accuracy vs classical MLP."
            },
            {
              day: 241,
              title: "Quantum Generative Models",
              hours: "9h",
              topics: [
                "Quantum GANs (QuGANs): generator + discriminator in quantum",
                "Quantum Boltzmann machines",
                "Quantum autoencoders for data compression",
                "Generating quantum states with QML",
                "Classical data loading bottleneck in QML",
                "Dequantization and realistic speedups"
              ],
              resources: [
                { name: "PennyLane – QuGAN Demo", url: "https://pennylane.ai/qml/demos/tutorial_quantum_gans/", type: "Free" }
              ],
              project: "Implement a QuGAN to learn a 1D probability distribution. Compare convergence with classical GAN."
            },
            {
              day: 242,
              title: "Quantum Reinforcement Learning",
              hours: "9h",
              topics: [
                "Classical RL recap: agent, environment, reward, policy",
                "Quantum policy gradient methods",
                "Quantum Q-learning approaches",
                "Quantum advantage in RL: theoretical prospects",
                "Grover-based RL: using Grover search for policy optimization",
                "Simulated quantum RL environments"
              ],
              resources: [
                { name: "arXiv: Quantum Reinforcement Learning Papers", url: "https://arxiv.org/search/?searchtype=all&query=quantum+reinforcement+learning", type: "Free" },
                { name: "PennyLane – Quantum RL Demo", url: "https://pennylane.ai/qml/demonstrations/#reinforcement-learning", type: "Free" }
              ],
              project: "Implement quantum policy gradient for a simple grid world environment using PennyLane + Gym."
            },
            {
              day: 243,
              title: "Quantum Natural Language Processing",
              hours: "9h",
              topics: [
                "DisCoCat: categorical compositional distributional semantics",
                "QNLP with lambeq library (Cambridge Quantum)",
                "Encoding sentences as quantum circuits",
                "Quantum text classification",
                "Quantum word embeddings",
                "lambeq: from English sentences to quantum circuits"
              ],
              resources: [
                { name: "lambeq Documentation – Cambridge Quantum", url: "https://cqcl.github.io/lambeq/", type: "Free" },
                { name: "Quantinuum QNLP Research", url: "https://www.quantinuum.com/", type: "Free" }
              ],
              project: "Use lambeq to classify sentiment (positive/negative) of sentences as quantum circuits. Train and evaluate."
            },
            {
              day: 244,
              title: "Building a Quantum Software Project",
              hours: "10h",
              topics: [
                "Project planning: scope, tools, deliverables",
                "Quantum software architecture patterns",
                "Testing quantum programs: unit tests with Qiskit",
                "Documentation for quantum projects",
                "Open source contribution workflow",
                "Publishing quantum notebooks on IBM Quantum"
              ],
              resources: [
                { name: "Qiskit GitHub – How to Contribute", url: "https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md", type: "Free" }
              ],
              project: "Start your quantum capstone project: design, plan, and implement first module."
            },
            {
              day: 245,
              title: "Quantum Ethics, Policy & Future",
              hours: "8h",
              topics: [
                "Quantum computing threats to cybersecurity: harvest now, decrypt later",
                "NIST post-quantum cryptography migration timeline",
                "Quantum computing and national security",
                "Economic impact: Boston Consulting Group quantum report",
                "Quantum workforce gap: skills shortage analysis",
                "Responsible quantum research practices"
              ],
              resources: [
                { name: "NIST PQC Migration Guide", url: "https://www.nist.gov/cybersecurity/post-quantum-cryptography", type: "Free" },
                { name: "BCG – Quantum Computing Report 2024", url: "https://www.bcg.com/", type: "Free" }
              ],
              project: "Write a 1,500-word policy brief: how should governments prepare for cryptographically relevant quantum computers by 2030?"
            },
            {
              day: 246,
              title: "Advanced Quantum Simulation",
              hours: "10h",
              topics: [
                "Tensor networks: MPS, PEPS — classical simulation of quantum systems",
                "Clifford circuits: classically simulable quantum circuits",
                "Stabilizer formalism: Gottesman-Knill theorem",
                "QuTiP advanced: open quantum systems, Lindblad master equation",
                "Quantum chaos and scrambling",
                "Benchmarking simulators vs real hardware"
              ],
              resources: [
                { name: "QuTiP Documentation – Advanced Topics", url: "https://qutip.org/docs/latest/", type: "Free" }
              ],
              project: "Simulate a Lindblad master equation for a 2-qubit system under amplitude damping noise using QuTiP."
            }
          ]
        },
        {
          week: 38,
          title: "Final Quantum Projects & Career Launch",
          days: [
            {
              day: 247,
              title: "Grand Quantum Capstone: Day 1",
              hours: "12h",
              topics: ["Full quantum computing project: algorithm + application + deployment"],
              resources: [],
              project: "Build: Quantum Drug Discovery Pipeline — use VQE (Qiskit Nature) to estimate molecular energy of a small organic molecule relevant to medicine. Compare accuracy with classical DFT."
            },
            {
              day: 248,
              title: "Grand Quantum Capstone: Day 2",
              hours: "12h",
              topics: ["Quantum optimization application"],
              resources: [],
              project: "Build: Quantum Portfolio Optimizer — implement QAOA to solve portfolio optimization for 8 stocks. Compare Sharpe ratio with classical Markowitz model."
            },
            {
              day: 249,
              title: "Grand Quantum Capstone: Day 3",
              hours: "12h",
              topics: ["Quantum machine learning project"],
              resources: [],
              project: "Build: Hybrid Quantum-Classical Image Classifier — train on MNIST digits using PennyLane QNN + PyTorch. Analyze where quantum layers add value."
            },
            {
              day: 250,
              title: "Final Portfolio & GitHub Organization",
              hours: "10h",
              topics: [
                "Quantum computing GitHub portfolio structure",
                "Jupyter notebook presentation best practices",
                "Technical writing for quantum audiences",
                "LinkedIn quantum computing profile optimization",
                "Applying to IBM Quantum Network, Google Quantum AI"
              ],
              resources: [
                { name: "IBM Quantum Network – University Programs", url: "https://quantum.ibm.com/programs", type: "Free" },
                { name: "Google Quantum AI – Career Opportunities", url: "https://quantumai.google/", type: "Free" }
              ],
              project: "Publish all quantum projects to GitHub. Write technical README for each. Update LinkedIn with Quantum Computing skills."
            },
            {
              day: 251,
              title: "Certification & Continuing Education",
              hours: "8h",
              topics: [
                "IBM Certified Associate Developer – Quantum Computation using Qiskit v0.2X",
                "Quera/IonQ learning programs",
                "MIT OCW 8.370 – Quantum Computation",
                "edX: MIT Quantum Computing Fundamentals",
                "Next steps: PhD programs, quantum internships, startups"
              ],
              resources: [
                { name: "IBM Quantum Certification Exam Prep", url: "https://www.ibm.com/certify/exam?id=C1000-112", type: "Paid" },
                { name: "edX – Quantum Computing Fundamentals (MIT)", url: "https://www.edx.org/learn/quantum-computing/massachusetts-institute-of-technology-quantum-computing-fundamentals", type: "Free/Paid" }
              ],
              project: "Complete IBM Qiskit Developer Certification practice exam. Score and identify weak areas."
            },
            {
              day: 252,
              title: "Full Curriculum Review & Integration",
              hours: "8h",
              topics: [
                "How quantum computing connects to computer vision (quantum image processing)",
                "How graphic design applies to quantum data visualization",
                "How 3D animation can visualize quantum states",
                "Cross-disciplinary project ideas",
                "Building a unique multi-disciplinary portfolio"
              ],
              resources: [],
              project: "Create a visualization of quantum entanglement and superposition using 3D animation (Blender) + data from a real Qiskit circuit."
            },
            {
              day: 253,
              title: "GRADUATION DAY",
              hours: "8h",
              topics: [
                "Complete portfolio review across all 6 disciplines",
                "Demo reel finalization",
                "Setting 12-month career goals",
                "Celebration and reflection"
              ],
              resources: [],
              project: "FINAL GRADUATION: Present your complete mastery portfolio — Graphic Design, 2D Animation, VFX, 3D Animation, Computer Vision, and Quantum Computing — to a live audience, community, or online. You have achieved what takes most people 5–7 years in 140 days."
            }
          ]
        }
      ]
    }
  ]
};

const allDays = plan.phases.flatMap(p => p.weeks.flatMap(w => w.days));

export default function LearningPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [view, setView] = useState("overview");

  const currentPhase = plan.phases[activePhase];

  const getDayPhase = (dayNum) => {
    for (const phase of plan.phases) {
      for (const week of phase.weeks) {
        for (const day of week.days) {
          if (day.day === dayNum) return phase;
        }
      }
    }
    return null;
  };

  const phase = activeDay ? getDayPhase(activeDay.day) : currentPhase;

  return (
    <div style={{
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "#0a0a0f",
      minHeight: "100vh",
      color: "#e8e8e8"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .phase-tab { transition: all 0.2s; cursor: pointer; border: 1px solid #222; }
        .phase-tab:hover { transform: translateY(-2px); }
        .day-card { transition: all 0.15s; cursor: pointer; border-left: 3px solid transparent; }
        .day-card:hover { background: #161620 !important; border-left-color: currentColor; }
        .resource-chip { transition: all 0.2s; }
        .resource-chip:hover { opacity: 0.8; }
        .back-btn { cursor: pointer; opacity: 0.6; transition: opacity 0.2s; }
        .back-btn:hover { opacity: 1; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a1a2e",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "#0a0a0f",
        zIndex: 100
      }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>
            {activeDay ? (
              <span>
                <span className="back-btn" onClick={() => setActiveDay(null)} style={{ fontSize: 14, marginRight: 12, color: phase?.accent }}>← BACK</span>
                Day {activeDay.day} — {activeDay.title}
              </span>
            ) : "DESIGN · VISION · QUANTUM"}
          </div>
          {!activeDay && <div style={{ fontSize: 11, color: "#555", marginTop: 4, letterSpacing: "2px" }}>9 PHASES · 253 DAYS · WORLD-CLASS CURRICULUM</div>}
        </div>
        {!activeDay && (
          <div style={{ display: "flex", gap: 8 }}>
            {["overview", "timeline"].map(v => (
              <button key={v} onClick={() => setView(v)} style={{
                background: view === v ? "#1a1a2e" : "transparent",
                border: `1px solid ${view === v ? "#333" : "#222"}`,
                color: view === v ? "#fff" : "#555",
                padding: "6px 14px",
                borderRadius: 4,
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: "inherit"
              }}>{v}</button>
            ))}
          </div>
        )}
      </div>

      {/* Day Detail View */}
      {activeDay && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
          {/* Day header */}
          <div style={{
            background: "#111118",
            border: `1px solid ${phase?.color}33`,
            borderRadius: 8,
            padding: 24,
            marginBottom: 24
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ color: phase?.accent, fontSize: 11, letterSpacing: "2px", marginBottom: 8 }}>{phase?.phase} — {phase?.title}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>{activeDay.title}</div>
              </div>
              <div style={{
                background: phase?.color + "22",
                border: `1px solid ${phase?.color}55`,
                borderRadius: 6,
                padding: "8px 16px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: phase?.color, fontFamily: "'Syne', sans-serif" }}>{activeDay.hours}</div>
                <div style={{ fontSize: 10, color: "#555", letterSpacing: "1px" }}>DAILY HOURS</div>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, letterSpacing: "2px", color: "#555", marginBottom: 16 }}>WHAT YOU'LL LEARN</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {activeDay.topics.map((t, i) => (
                <div key={i} style={{
                  background: "#111118",
                  border: "1px solid #1a1a2e",
                  borderRadius: 6,
                  padding: "12px 16px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start"
                }}>
                  <span style={{ color: phase?.accent, fontSize: 12, marginTop: 2, flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: 14, lineHeight: 1.6, color: "#ccc" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          {activeDay.resources.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, letterSpacing: "2px", color: "#555", marginBottom: 16 }}>RESOURCES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {activeDay.resources.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-chip" style={{
                    background: "#111118",
                    border: "1px solid #1a1a2e",
                    borderRadius: 6,
                    padding: "12px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit"
                  }}>
                    <span style={{ fontSize: 14, color: "#ddd" }}>{r.name}</span>
                    <span style={{
                      fontSize: 10,
                      padding: "3px 10px",
                      borderRadius: 3,
                      background: r.type === "Free" ? "#0a3a0a" : r.type === "Book" ? "#3a2a00" : "#1a0a3a",
                      color: r.type === "Free" ? "#4caf50" : r.type === "Book" ? "#ffb300" : "#9c7aff",
                      letterSpacing: "1px"
                    }}>{r.type.toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Project */}
          <div style={{
            background: phase?.color + "11",
            border: `2px solid ${phase?.color}44`,
            borderRadius: 8,
            padding: 20
          }}>
            <div style={{ fontSize: 11, letterSpacing: "2px", color: phase?.accent, marginBottom: 10 }}>DAILY PROJECT</div>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: "#e8e8e8" }}>{activeDay.project}</div>
          </div>
        </div>
      )}

      {/* Overview + Phase Navigation */}
      {!activeDay && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
          {view === "overview" && (
            <>
              {/* Stats banner */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                marginBottom: 32
              }}>
                {[
                  { label: "Total Days", value: "253" },
                  { label: "Daily Hours", value: "8–12h" },
                  { label: "Phases", value: "9" },
                  { label: "Projects", value: "253+" }
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "#111118",
                    border: "1px solid #1a1a2e",
                    borderRadius: 8,
                    padding: "16px 20px"
                  }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#555", letterSpacing: "1px", marginTop: 4 }}>{s.label.toUpperCase()}</div>
                  </div>
                ))}
              </div>

              {/* Philosophy */}
              <div style={{
                background: "#111118",
                border: "1px solid #1a1a2e",
                borderRadius: 8,
                padding: 20,
                marginBottom: 32,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#888"
              }}>
                <span style={{ color: "#e8e8e8", fontWeight: 500 }}>Philosophy: </span>{plan.overview.philosophy}
              </div>

              {/* Phase tabs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 32 }}>
                {plan.phases.map((p, i) => (
                  <div key={i} className="phase-tab" onClick={() => setActivePhase(i)} style={{
                    background: activePhase === i ? p.color + "22" : "#111118",
                    borderColor: activePhase === i ? p.color + "66" : "#1a1a2e",
                    borderRadius: 8,
                    padding: "18px 20px"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontSize: 10, color: activePhase === i ? p.accent : "#444", letterSpacing: "2px", marginBottom: 6 }}>{p.phase}</div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: activePhase === i ? "#fff" : "#888" }}>{p.title}</div>
                      </div>
                      <div style={{ fontSize: 11, color: activePhase === i ? p.color : "#333", whiteSpace: "nowrap" }}>{p.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current phase weeks */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: "2px", color: "#555", marginBottom: 20 }}>
                  {currentPhase.phase.toUpperCase()} — {currentPhase.title.toUpperCase()} — {currentPhase.duration}
                </div>
                {currentPhase.weeks.map((week, wi) => (
                  <div key={wi} style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 12, color: currentPhase.accent, letterSpacing: "2px", marginBottom: 12 }}>
                      WEEK {week.week} — {week.title.toUpperCase()}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {week.days.map((day, di) => (
                        <div key={di} className="day-card" onClick={() => setActiveDay(day)} style={{
                          background: "#0f0f16",
                          borderRadius: 6,
                          padding: "14px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          color: currentPhase.color
                        }}>
                          <span style={{
                            fontSize: 11,
                            color: "#333",
                            minWidth: 50,
                            letterSpacing: "1px"
                          }}>DAY {day.day}</span>
                          <span style={{ fontSize: 14, color: "#ccc", flex: 1 }}>{day.title}</span>
                          <span style={{ fontSize: 11, color: "#444" }}>{day.hours}</span>
                          <span style={{ fontSize: 11, color: "#333" }}>→</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "timeline" && (
            <div>
              <div style={{ fontSize: 11, letterSpacing: "2px", color: "#555", marginBottom: 24 }}>FULL 253-DAY TIMELINE</div>
              {plan.phases.map((phase, pi) => (
                <div key={pi} style={{ marginBottom: 40 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                    paddingBottom: 12,
                    borderBottom: `1px solid ${phase.color}33`
                  }}>
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: phase.color
                    }}></div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700 }}>{phase.title}</div>
                    <div style={{ fontSize: 11, color: "#555" }}>{phase.duration}</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                    {phase.weeks.flatMap(w => w.days).map((day, di) => (
                      <div key={di} onClick={() => setActiveDay(day)} style={{
                        background: "#111118",
                        border: `1px solid ${phase.color}22`,
                        borderRadius: 4,
                        padding: "10px 6px",
                        cursor: "pointer",
                        transition: "all 0.15s"
                      }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = phase.color + "22";
                          e.currentTarget.style.borderColor = phase.color + "88";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "#111118";
                          e.currentTarget.style.borderColor = phase.color + "22";
                        }}>
                        <div style={{ fontSize: 9, color: "#444", marginBottom: 4 }}>D{day.day}</div>
                        <div style={{ fontSize: 10, color: "#999", lineHeight: 1.3 }}>{day.title.slice(0, 20)}{day.title.length > 20 ? "…" : ""}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
