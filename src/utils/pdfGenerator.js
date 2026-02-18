import jsPDF from 'jspdf';

/**
 * Generates a comprehensive PDF guide about signature importance
 * @param {string} customerName - Optional customer name for personalization
 */
export const generateSignatureGuidePDF = (customerName = 'Valued Customer') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;
  const margin = 20;
  const lineHeight = 7;
  const sectionSpacing = 15;

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text, fontSize, isBold = false, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      doc.setFont(undefined, 'bold');
    } else {
      doc.setFont(undefined, 'normal');
    }
    
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    lines.forEach((line) => {
      checkPageBreak(lineHeight);
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
  };

  // Title Page
  doc.setFillColor(75, 0, 130); // Purple
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont(undefined, 'bold');
  doc.text('Your Signature', pageWidth / 2, 80, { align: 'center' });
  doc.text('Your Legacy', pageWidth / 2, 100, { align: 'center' });
  
  doc.setFontSize(18);
  doc.setFont(undefined, 'normal');
  doc.text('A Comprehensive Guide to Signature Importance', pageWidth / 2, 120, { align: 'center' });
  doc.text('and Best Practices', pageWidth / 2, 135, { align: 'center' });

  doc.setFontSize(14);
  doc.text(`Prepared for: ${customerName}`, pageWidth / 2, 200, { align: 'center' });
  doc.text('SignaturePro', pageWidth / 2, 210, { align: 'center' });

  // Page 2: Introduction
  doc.addPage();
  yPosition = margin;

  addText('Introduction', 24, true, [75, 0, 130]);
  yPosition += 5;

  addText(
    `Dear ${customerName},`,
    12,
    false,
    [0, 0, 0]
  );
  yPosition += 5;

  addText(
    'Your signature is one of the most personal and powerful tools you possess. It appears on contracts, legal documents, business agreements, and personal correspondence. Yet, many people underestimate its importance and impact.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText(
    'This guide will help you understand why your signature matters, how to develop one that reflects your identity, and why we recommend our approach to signature design.',
    11,
    false,
    [0, 0, 0]
  );

  // Page 3: Why Signatures Matter
  doc.addPage();
  yPosition = margin;

  addText('Chapter 1: Why Your Signature Matters', 20, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText('1.1 Professional Credibility', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Your signature is often the first impression you make on important documents. A well-designed, consistent signature establishes trust and professionalism. In business and legal contexts, a clear, confident signature suggests attention to detail and reliability.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('1.2 Personal Branding', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Your signature is part of your personal brand. Just like a logo represents a company, your signature represents you. A unique, memorable signature helps you stand out and be remembered in professional and social contexts.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('1.3 Legal and Professional Significance', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Signatures have legal weight. They authenticate documents, authorize actions, and create binding agreements. A consistent, recognizable signature is essential for legal protection and professional credibility.',
    11,
    false,
    [0, 0, 0]
  );

  // Page 4: The Psychology of Signatures
  doc.addPage();
  yPosition = margin;

  addText('Chapter 2: The Psychology of Signatures', 20, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText('2.1 First Impressions', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Research shows that people form impressions within seconds. Your signature is often the first thing someone sees on your documents. A well-crafted signature can convey confidence, professionalism, and attention to detail.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('2.2 Subconscious Associations', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'People subconsciously associate signature quality with personal qualities. A clear, elegant signature suggests sophistication and professionalism, while a messy or inconsistent signature may suggest carelessness or lack of attention.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('2.3 Memorability', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'A unique, well-designed signature is more memorable. This can be advantageous in networking, business relationships, and professional settings where being remembered matters.',
    11,
    false,
    [0, 0, 0]
  );

  // Page 5: Our Recommended Approach
  doc.addPage();
  yPosition = margin;

  addText('Chapter 3: Why We Recommend This Approach', 20, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText('3.1 Professional Design Expertise', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Our signature designs are created by professionals who understand typography, psychology, and branding. We consider factors like readability, uniqueness, and professional appropriateness that you might not think of on your own.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('3.2 Multiple Options', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'We provide three unique designs so you can choose the one that best reflects your personality and professional needs. This variety ensures you find a signature that feels authentic to you.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('3.3 Balance of Style and Legibility', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Our designs strike the perfect balance between being distinctive and remaining legible. A signature that is too stylized may be hard to read, while one that is too plain lacks personality. We find the sweet spot.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('3.4 Timeless Design', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Trends come and go, but a well-designed signature remains professional and appropriate for decades. Our designs are created with longevity in mind, ensuring your signature will serve you well throughout your career.',
    11,
    false,
    [0, 0, 0]
  );

  // Page 6: How to Practice Your Signature
  doc.addPage();
  yPosition = margin;

  addText('Chapter 4: How to Practice Your Signature', 20, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText('4.1 Start with Tracing', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Begin by tracing your chosen signature design multiple times. This helps your hand and brain learn the muscle memory required for consistent execution. Practice for 10-15 minutes daily.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('4.2 Practice Freehand', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'After tracing, practice writing your signature freehand. Start slowly, focusing on accuracy rather than speed. Gradually increase your speed while maintaining consistency.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('4.3 Consistency is Key', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'A signature must be consistent to be legally valid and professionally credible. Practice until you can reproduce your signature reliably, even when signing quickly or under pressure.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('4.4 Use Practice Sheets', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'We provide practice sheets with your signature design. Use these regularly to build muscle memory. Practice in different contexts - on lines, in boxes, and on blank paper.',
    11,
    false,
    [0, 0, 0]
  );

  // Page 7: Best Practices
  doc.addPage();
  yPosition = margin;

  addText('Chapter 5: Best Practices and Tips', 20, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText('5.1 When to Use Your Signature', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Use your signature consistently on all official documents: contracts, legal papers, bank documents, job applications, and professional correspondence. Consistency builds recognition and legal validity.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('5.2 Signature Placement', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Sign in the designated signature area. Ensure your signature is clear and doesn\'t overlap with printed text. Leave enough space for your full signature.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('5.3 Digital vs. Physical Signatures', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'For digital documents, you can use a scanned version of your signature or create a digital version. Ensure it matches your physical signature for consistency. For important legal documents, physical signatures are often preferred.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText('5.4 Maintaining Your Signature', 16, true, [138, 43, 226]);
  yPosition += 3;
  addText(
    'Once you\'ve chosen and practiced your signature, maintain it consistently. Avoid changing it frequently, as this can cause legal and professional complications. Your signature should evolve naturally over time, not change dramatically.',
    11,
    false,
    [0, 0, 0]
  );

  // Final Page: Conclusion
  doc.addPage();
  yPosition = margin;

  addText('Conclusion', 24, true, [75, 0, 130]);
  yPosition += sectionSpacing;

  addText(
    'Your signature is a powerful tool that represents your identity, professionalism, and personal brand. By investing in a well-designed signature and understanding its importance, you\'re making an investment in your professional future.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText(
    'Remember:',
    14,
    true,
    [138, 43, 226]
  );
  yPosition += 5;

  const reminders = [
    'Practice regularly to build muscle memory',
    'Use your signature consistently across all documents',
    'Keep it professional yet personal',
    'Maintain it over time for legal validity',
    'Let it reflect your personality and values'
  ];

  reminders.forEach((reminder) => {
    addText(`• ${reminder}`, 11, false, [0, 0, 0]);
    yPosition += 3;
  });

  yPosition += sectionSpacing;

  addText(
    'Thank you for choosing SignaturePro. We\'re here to help you make the best impression.',
    11,
    false,
    [0, 0, 0]
  );
  yPosition += sectionSpacing;

  addText(
    'For questions or support, please contact our team.',
    11,
    false,
    [0, 0, 0]
  );

  // Footer on all pages
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `SignaturePro - Signature Guide | Page ${i} of ${pageCount}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  const fileName = `Signature_Guide_${customerName.replace(/\s+/g, '_')}_${new Date().getFullYear()}.pdf`;
  doc.save(fileName);

  return fileName;
};
