<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEO Tools Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Navigation Bar -->
  <nav>
    <div class="logo">SEO Tools</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#tools">Tools</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Homepage Section -->
  <section id="home" class="hero">
    <h1>Your All-in-One SEO Toolkit</h1>
    <p>Boost your website's performance with our powerful tools.</p>
    <a href="#tools" class="cta-button">Explore Tools</a>
  </section>

  <!-- Tools Section -->
  <section id="tools" class="tools">
    <h2>Our Tools</h2>
    <div class="tool-cards">
      <div class="card">
        <h3>Plagiarism Checker</h3>
        <p>Check for duplicate content.</p>
        <button onclick="showTool('plagiarism')">Use Tool</button>
      </div>
      <div class="card">
        <h3>Grammar Checker</h3>
        <p>Improve your writing.</p>
        <button onclick="showTool('grammar')">Use Tool</button>
      </div>
      <div class="card">
        <h3>Word Counter</h3>
        <p>Count words in your text.</p>
        <button onclick="showTool('wordCounter')">Use Tool</button>
      </div>
    </div>
  </section>

  <!-- Tool Containers -->
  <div id="plagiarism" class="tool-container" style="display: none;">
    <h2>Plagiarism Checker</h2>
    <textarea id="plagiarismInput" placeholder="Paste your text here..."></textarea>
    <button onclick="checkPlagiarism()">Check Plagiarism</button>
    <p id="plagiarismResult"></p>
    <button onclick="showHome()">Back to Home</button>
  </div>

  <div id="grammar" class="tool-container" style="display: none;">
    <h2>Grammar Checker</h2>
    <textarea id="grammarInput" placeholder="Paste your text here..."></textarea>
    <button onclick="checkGrammar()">Check Grammar</button>
    <p id="grammarResult"></p>
    <button onclick="showHome()">Back to Home</button>
  </div>

  <div id="wordCounter" class="tool-container" style="display: none;">
    <h2>Word Counter</h2>
    <textarea id="wordCounterInput" placeholder="Paste your text here..."></textarea>
    <button onclick="countWords()">Count Words</button>
    <p id="wordCounterResult"></p>
    <button onclick="showHome()">Back to Home</button>
  </div>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 SEO Tools. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
