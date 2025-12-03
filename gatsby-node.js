const { execSync } = require('child_process');
const path = require('path');

/**
 * Hook that runs after the build is complete
 * Generates the PDF resume from the YAML data
 */
exports.onPostBuild = async ({ reporter }) => {
  reporter.info('Generating PDF resume...');

  try {
    const scriptPath = path.join(__dirname, 'scripts', 'generate-resume-pdf.js');
    execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
    reporter.success('PDF resume generated successfully!');
  } catch (error) {
    reporter.error('Failed to generate PDF resume:', error);
    throw error;
  }
};
