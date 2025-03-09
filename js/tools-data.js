// Tools Data
const toolsData = [
    // Image Tools
    {
        name: "Image to PNG Converter",
        description: "Convert your images to PNG format with transparency support.",
        category: "image",
        url: "tools/image-to-png.html"
    },
    {
        name: "Image to JPG Converter",
        description: "Convert your images to JPG format with quality control.",
        category: "image",
        url: "tools/image-to-jpg.html"
    },
    {
        name: "Image Resizer",
        description: "Resize your images to any dimension while maintaining quality.",
        category: "image",
        url: "tools/image-resizer.html"
    },
    {
        name: "Image Compressor",
        description: "Compress your images to reduce file size without losing quality.",
        category: "image",
        url: "tools/image-compressor.html"
    },
    {
        name: "Image Cropper",
        description: "Crop your images to the desired dimensions or aspect ratio.",
        category: "image",
        url: "tools/image-cropper.html"
    },
    {
        name: "Convert Image to Base64",
        description: "Convert your images to Base64 encoding for use in CSS or HTML.",
        category: "image",
        url: "tools/image-to-base64.html"
    },
    {
        name: "Convert WebP to PNG",
        description: "Convert WebP images to PNG format for better compatibility.",
        category: "image",
        url: "tools/webp-to-png.html"
    },
    {
        name: "GIF Maker",
        description: "Create animated GIFs from a series of images or video clips.",
        category: "image",
        url: "tools/gif-maker.html"
    },
    {
        name: "QR Code Generator",
        description: "Generate QR codes for URLs, text, contact info, and more.",
        category: "image",
        url: "tools/qr-code-generator.html"
    },
    {
        name: "Screenshot to PDF Converter",
        description: "Convert screenshots or images to PDF documents.",
        category: "image",
        url: "tools/screenshot-to-pdf.html"
    },
    
    // SEO Tools
    {
        name: "Meta Tag Generator",
        description: "Generate meta tags for your website to improve SEO.",
        category: "seo",
        url: "tools/meta-tag-generator.html"
    },
    {
        name: "Keyword Density Checker",
        description: "Check the keyword density of your content for SEO optimization.",
        category: "seo",
        url: "tools/keyword-density-checker.html"
    },
    {
        name: "Sitemap Generator",
        description: "Generate XML sitemaps for your website to improve search engine indexing.",
        category: "seo",
        url: "tools/sitemap-generator.html"
    },
    {
        name: "Robots.txt Generator",
        description: "Create robots.txt files to control search engine crawling of your site.",
        category: "seo",
        url: "tools/robots-txt-generator.html"
    },
    {
        name: "Google Index Checker",
        description: "Check if your website or webpage is indexed by Google.",
        category: "seo",
        url: "tools/google-index-checker.html"
    },
    {
        name: "Domain Authority Checker",
        description: "Check the domain authority of your website or competitors.",
        category: "seo",
        url: "tools/domain-authority-checker.html"
    },
    {
        name: "Backlink Checker",
        description: "Check the backlinks pointing to your website or competitors.",
        category: "seo",
        url: "tools/backlink-checker.html"
    },
    {
        name: "Page Speed Checker",
        description: "Check the loading speed of your website and get optimization tips.",
        category: "seo",
        url: "tools/page-speed-checker.html"
    },
    {
        name: "XML Sitemap Validator",
        description: "Validate your XML sitemap for errors and warnings.",
        category: "seo",
        url: "tools/xml-sitemap-validator.html"
    },
    {
        name: "Mobile-Friendly Test",
        description: "Test if your website is mobile-friendly and responsive.",
        category: "seo",
        url: "tools/mobile-friendly-test.html"
    },
    
    // Text Tools
    {
        name: "Word Counter",
        description: "Count the number of words, characters, and paragraphs in your text.",
        category: "text",
        url: "tools/word-counter.html"
    },
    {
        name: "Character Counter",
        description: "Count the number of characters in your text, with or without spaces.",
        category: "text",
        url: "tools/character-counter.html"
    },
    {
        name: "Case Converter",
        description: "Convert text to uppercase, lowercase, title case, or sentence case.",
        category: "text",
        url: "tools/case-converter.html"
    },
    {
        name: "Plagiarism Checker",
        description: "Check your text for plagiarism against online sources.",
        category: "text",
        url: "tools/plagiarism-checker.html"
    },
    {
        name: "Grammar Checker",
        description: "Check your text for grammar, spelling, and punctuation errors.",
        category: "text",
        url: "tools/grammar-checker.html"
    },
    {
        name: "Text-to-Speech",
        description: "Convert your text to speech with natural-sounding voices.",
        category: "text",
        url: "tools/text-to-speech.html"
    },
    {
        name: "Speech-to-Text",
        description: "Convert spoken words to text with high accuracy.",
        category: "text",
        url: "tools/speech-to-text.html"
    },
    {
        name: "URL Encoder & Decoder",
        description: "Encode or decode URLs for safe transmission over the internet.",
        category: "text",
        url: "tools/url-encoder-decoder.html"
    },
    {
        name: "Fancy Text Generator",
        description: "Generate fancy and stylish text for social media profiles and posts.",
        category: "text",
        url: "tools/fancy-text-generator.html"
    },
    {
        name: "Random Text Generator",
        description: "Generate random text for testing or placeholder content.",
        category: "text",
        url: "tools/random-text-generator.html"
    },
    
    // Developer Tools
    {
        name: "JSON Formatter",
        description: "Format and validate JSON data with syntax highlighting.",
        category: "developer",
        url: "tools/json-formatter.html"
    },
    {
        name: "HTML to Markdown Converter",
        description: "Convert HTML code to Markdown format for easier editing.",
        category: "developer",
        url: "tools/html-to-markdown.html"
    },
    {
        name: "CSS Minifier",
        description: "Minify CSS code to reduce file size and improve loading speed.",
        category: "developer",
        url: "tools/css-minifier.html"
    },
    {
        name: "JavaScript Minifier",
        description: "Minify JavaScript code to reduce file size and improve loading speed.",
        category: "developer",
        url: "tools/javascript-minifier.html"
    },
    {
        name: "SQL Formatter",
        description: "Format and beautify SQL queries for better readability.",
        category: "developer",
        url: "tools/sql-formatter.html"
    },
    {
        name: "HTACCESS Redirect Generator",
        description: "Generate .htaccess redirect rules for your website.",
        category: "developer",
        url: "tools/htaccess-redirect-generator.html"
    },
    {
        name: "Markdown to HTML Converter",
        description: "Convert Markdown text to HTML code with syntax highlighting.",
        category: "developer",
        url: "tools/markdown-to-html.html"
    },
    {
        name: "Color Code Picker",
        description: "Pick and convert colors between HEX, RGB, HSL, and more.",
        category: "developer",
        url: "tools/color-code-picker.html"
    },
    {
        name: "Base64 Encoder & Decoder",
        description: "Encode or decode text and files to/from Base64 format.",
        category: "developer",
        url: "tools/base64-encoder-decoder.html"
    },
    {
        name: "IP Address Lookup",
        description: "Look up information about an IP address, including location and ISP.",
        category: "developer",
        url: "tools/ip-address-lookup.html"
    },
    
    // Math & Calculators
    {
        name: "Percentage Calculator",
        description: "Calculate percentages, percentage changes, and more.",
        category: "math",
        url: "tools/percentage-calculator.html"
    },
    {
        name: "Age Calculator",
        description: "Calculate age in years, months, and days between two dates.",
        category: "math",
        url: "tools/age-calculator.html"
    },
    {
        name: "BMI Calculator",
        description: "Calculate Body Mass Index (BMI) and get health recommendations.",
        category: "math",
        url: "tools/bmi-calculator.html"
    },
    {
        name: "Loan EMI Calculator",
        description: "Calculate loan EMI, total interest, and payment schedule.",
        category: "math",
        url: "tools/loan-emi-calculator.html"
    },
    {
        name: "Scientific Calculator",
        description: "Perform complex mathematical calculations with scientific functions.",
        category: "math",
        url: "tools/scientific-calculator.html"
    },
    {
        name: "Discount Calculator",
        description: "Calculate discounts, sale prices, and savings on purchases.",
        category: "math",
        url: "tools/discount-calculator.html"
    },
    {
        name: "Currency Converter",
        description: "Convert between different currencies with real-time exchange rates.",
        category: "math",
        url: "tools/currency-converter.html"
    },
    {
        name: "Time Zone Converter",
        description: "Convert time between different time zones around the world.",
        category: "math",
        url: "tools/time-zone-converter.html"
    },
    {
        name: "Binary to Decimal Converter",
        description: "Convert between binary, decimal, hexadecimal, and octal number systems.",
        category: "math",
        url: "tools/binary-decimal-converter.html"
    },
    {
        name: "Tip Calculator",
        description: "Calculate tips and split bills among multiple people.",
        category: "math",
        url: "tools/tip-calculator.html"
    },
    
    // Unit Converters
    {
        name: "Length Converter",
        description: "Convert between different units of length (meters, feet, inches, etc.).",
        category: "converter",
        url: "tools/length-converter.html"
    },
    {
        name: "Weight Converter",
        description: "Convert between different units of weight (kg, pounds, ounces, etc.).",
        category: "converter",
        url: "tools/weight-converter.html"
    },
    {
        name: "Speed Converter",
        description: "Convert between different units of speed (mph, km/h, m/s, etc.).",
        category: "converter",
        url: "tools/speed-converter.html"
    },
    {
        name: "Temperature Converter",
        description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales.",
        category: "converter",
        url: "tools/temperature-converter.html"
    },
    {
        name: "Volume Converter",
        description: "Convert between different units of volume (liters, gallons, etc.).",
        category: "converter",
        url: "tools/volume-converter.html"
    },
    {
        name: "Data Storage Converter",
        description: "Convert between different units of data storage (bytes, KB, MB, etc.).",
        category: "converter",
        url: "tools/data-storage-converter.html"
    },
    {
        name: "Energy Converter",
        description: "Convert between different units of energy (joules, calories, etc.).",
        category: "converter",
        url: "tools/energy-converter.html"
    },
    {
        name: "Pressure Converter",
        description: "Convert between different units of pressure (pascal, bar, psi, etc.).",
        category: "converter",
        url: "tools/pressure-converter.html"
    },
    {
        name: "Fuel Efficiency Converter",
        description: "Convert between different units of fuel efficiency (mpg, km/l, etc.).",
        category: "converter",
        url: "tools/fuel-efficiency-converter.html"
    },
    {
        name: "Angle Converter",
        description: "Convert between different units of angles (degrees, radians, etc.).",
        category: "converter",
        url: "tools/angle-converter.html"
    },
    
    // Security & Encryption Tools
    {
        name: "MD5 Hash Generator",
        description: "Generate MD5 hash of text or files for verification purposes.",
        category: "security",
        url: "tools/md5-hash-generator.html"
    },
    {
        name: "SHA256 Hash Generator",
        description: "Generate SHA256 hash of text or files for secure verification.",
        category: "security",
        url: "tools/sha256-hash-generator.html"
    },
    {
        name: "Password Generator",
        description: "Generate strong, random passwords with customizable options.",
        category: "security",
        url: "tools/password-generator.html"
    },
    {
        name: "Random String Generator",
        description: "Generate random strings of letters, numbers, and symbols.",
        category: "security",
        url: "tools/random-string-generator.html"
    },
    {
        name: "URL Shortener",
        description: "Shorten long URLs for easier sharing and tracking.",
        category: "security",
        url: "tools/url-shortener.html"
    },
    {
        name: "IP Geolocation Finder",
        description: "Find the geographical location of an IP address.",
        category: "security",
        url: "tools/ip-geolocation-finder.html"
    },
    {
        name: "SSL Certificate Checker",
        description: "Check SSL certificate details and expiration date of a website.",
        category: "security",
        url: "tools/ssl-certificate-checker.html"
    },
    {
        name: "Whois Lookup",
        description: "Look up domain registration information and ownership details.",
        category: "security",
        url: "tools/whois-lookup.html"
    },
    {
        name: "HTTP Headers Checker",
        description: "Check HTTP headers of a website for security and information.",
        category: "security",
        url: "tools/http-headers-checker.html"
    },
    {
        name: "Privacy Policy Generator",
        description: "Generate a privacy policy for your website or app.",
        category: "security",
        url: "tools/privacy-policy-generator.html"
    },
    
    // Social Media Tools
    {
        name: "YouTube Thumbnail Downloader",
        description: "Download thumbnails from YouTube videos in high resolution.",
        category: "social",
        url: "tools/youtube-thumbnail-downloader.html"
    },
    {
        name: "Instagram Photo Downloader",
        description: "Download photos and videos from Instagram posts.",
        category: "social",
        url: "tools/instagram-photo-downloader.html"
    },
    {
        name: "Twitter Video Downloader",
        description: "Download videos from Twitter posts and tweets.",
        category: "social",
        url: "tools/twitter-video-downloader.html"
    },
    {
        name: "Facebook Video Downloader",
        description: "Download videos from Facebook posts and pages.",
        category: "social",
        url: "tools/facebook-video-downloader.html"
    },
    {
        name: "TikTok Video Downloader",
        description: "Download videos from TikTok without watermark.",
        category: "social",
        url: "tools/tiktok-video-downloader.html"
    },
    {
        name: "YouTube Tags Extractor",
        description: "Extract tags from YouTube videos for SEO analysis.",
        category: "social",
        url: "tools/youtube-tags-extractor.html"
    },
    {
        name: "Hashtag Generator",
        description: "Generate relevant hashtags for social media posts.",
        category: "social",
        url: "tools/hashtag-generator.html"
    },
    {
        name: "Social Media Post Generator",
        description: "Generate engaging social media posts with AI assistance.",
        category: "social",
        url: "tools/social-media-post-generator.html"
    },
    {
        name: "Emoji Keyboard",
        description: "Find and copy emojis for social media posts and messages.",
        category: "social",
        url: "tools/emoji-keyboard.html"
    },
    {
        name: "Twitter Character Counter",
        description: "Count characters for Twitter posts with real-time feedback.",
        category: "social",
        url: "tools/twitter-character-counter.html"
    },
    
    // Miscellaneous Tools
    {
        name: "Barcode Generator",
        description: "Generate barcodes in various formats for products and inventory.",
        category: "misc",
        url: "tools/barcode-generator.html"
    },
    {
        name: "Meme Generator",
        description: "Create custom memes with popular templates and your own images.",
        category: "misc",
        url: "tools/meme-generator.html"
    },
    {
        name: "Resume Builder",
        description: "Build a professional resume with customizable templates.",
        category: "misc",
        url: "tools/resume-builder.html"
    },
    {
        name: "Invoice Generator",
        description: "Generate professional invoices for your business or freelance work.",
        category: "misc",
        url: "tools/invoice-generator.html"
    },
    {
        name: "Business Name Generator",
        description: "Generate creative business name ideas for your startup.",
        category: "misc",
        url: "tools/business-name-generator.html"
    },
    {
        name: "Lottery Number Generator",
        description: "Generate random lottery numbers for various lottery games.",
        category: "misc",
        url: "tools/lottery-number-generator.html"
    },
    {
        name: "Flip a Coin Simulator",
        description: "Simulate flipping a coin for making random decisions.",
        category: "misc",
        url: "tools/flip-coin-simulator.html"
    },
    {
        name: "Random Number Generator",
        description: "Generate random numbers within a specified range.",
        category: "misc",
        url: "tools/random-number-generator.html"
    },
    {
        name: "Dice Roller Simulator",
        description: "Simulate rolling dice for games and random decisions.",
        category: "misc",
        url: "tools/dice-roller-simulator.html"
    },
    {
        name: "Internet Speed Test",
        description: "Test your internet connection speed and latency.",
        category: "misc",
        url: "tools/internet-speed-test.html"
    },
    {
        name: "Daily Planner Creator",
        description: "Create a daily planner to organize your tasks and schedule.",
        category: "misc",
        url: "tools/daily-planner-creator.html"
    },
    {
        name: "Wedding Invitation Generator",
        description: "Generate beautiful wedding invitations with customizable templates.",
        category: "misc",
        url: "tools/wedding-invitation-generator.html"
    },
    {
        name: "Story Plot Generator",
        description: "Generate creative story plots and ideas for writers.",
        category: "misc",
        url: "tools/story-plot-generator.html"
    },
    {
        name: "E-book Creator",
        description: "Create e-books in various formats from your content.",
        category: "misc",
        url: "tools/ebook-creator.html"
    },
    {
        name: "AI Chatbot Demo",
        description: "Try out an AI chatbot for customer service or assistance.",
        category: "misc",
        url: "tools/ai-chatbot-demo.html"
    },
    {
        name: "IP Address Tracker",
        description: "Track and monitor your IP address and connection details.",
        category: "misc",
        url: "tools/ip-address-tracker.html"
    },
    {
        name: "Fake Address Generator",
        description: "Generate fake addresses for testing and development purposes.",
        category: "misc",
        url: "tools/fake-address-generator.html"
    },
    {
        name: "Calculator for Electric Bills",
        description: "Calculate your electric bill based on usage and rates.",
        category: "misc",
        url: "tools/electric-bill-calculator.html"
    },
    {
        name: "Leap Year Checker",
        description: "Check if a year is a leap year or not.",
        category: "misc",
        url: "tools/leap-year-checker.html"
    },
    {
        name: "Name to Numerology Calculator",
        description: "Calculate the numerological value of your name.",
        category: "misc",
        url: "tools/numerology-calculator.html"
    }
]; 