document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('fileInput');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const convertBtn = document.getElementById('convertBtn');
    const fileInfo = document.getElementById('fileInfo');
    const resultArea = document.getElementById('resultArea');
    const downloadLink = document.getElementById('downloadLink');
    
    let selectedFile = null;
    
    // Handle file selection via button
    selectFileBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    // Handle file input change
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
    
    // Handle drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
        dropArea.classList.add('highlight');
    }
    
    function unhighlight() {
        dropArea.classList.remove('highlight');
    }
    
    dropArea.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });
    
    function handleFiles(files) {
        if (files.length > 0) {
            selectedFile = files[0];
            fileInfo.textContent = `Selected: ${selectedFile.name}`;
            convertBtn.disabled = false;
            
            // Check file type
            const validTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            if (!validTypes.includes(selectedFile.type) && !selectedFile.name.match(/\.(xls|xlsx)$/i)) {
                fileInfo.textContent = 'Please select an Excel file (.xls or .xlsx)';
                convertBtn.disabled = true;
                selectedFile = null;
            }
        }
    }
    
    // Convert button click
    convertBtn.addEventListener('click', async () => {
        if (!selectedFile) return;
        
        convertBtn.disabled = true;
        convertBtn.textContent = 'Converting...';
        
        try {
            // In a real app, you would upload to a server for conversion
            // This is a simulation that creates a dummy PDF
            const pdfBytes = await createDummyPdf(selectedFile.name);
            
            // Create download link
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = selectedFile.name.replace(/\.[^/.]+$/, '') + '.pdf';
            
            // Show result
            resultArea.style.display = 'block';
        } catch (error) {
            console.error('Conversion error:', error);
            fileInfo.textContent = 'Error during conversion. Please try again.';
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = 'Convert to PDF';
        }
    });
    
    // Creates a dummy PDF with the filename (simulates conversion)
    async function createDummyPdf(filename) {
        const { PDFDocument, rgb } = PDFLib;
        
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([550, 750]);
        
        page.drawText('Excel to PDF Conversion', {
            x: 50,
            y: 700,
            size: 24,
            color: rgb(0, 0, 0),
        });
        
        page.drawText(`Original file: ${filename}`, {
            x: 50,
            y: 650,
            size: 14,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('This is a simulated PDF conversion.', {
            x: 50,
            y: 600,
            size: 14,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('In a real implementation, the actual Excel spreadsheet would appear here.', {
            x: 50,
            y: 550,
            size: 12,
            color: rgb(0.5, 0.5, 0.5),
        });
        
        // Draw a simple table to represent spreadsheet data
        page.drawText('Sample Data:', {
            x: 50,
            y: 500,
            size: 12,
            color: rgb(0, 0, 0),
        });
        
        // Table header
        page.drawText('Name', {
            x: 50,
            y: 480,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('Value', {
            x: 150,
            y: 480,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        // Table rows
        page.drawText('Item 1', {
            x: 50,
            y: 460,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('100', {
            x: 150,
            y: 460,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('Item 2', {
            x: 50,
            y: 440,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        page.drawText('200', {
            x: 150,
            y: 440,
            size: 10,
            color: rgb(0, 0, 0),
        });
        
        return await pdfDoc.save();
    }
});