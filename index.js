const inquirer = require('inquirer');
const chalk = require('chalk');
const { cases } = require('./cases');

let score = 0;
const maxScore = cases.length * 10;

function hr() {
  console.log(chalk.gray('  ' + '─'.repeat(64)));
}

function printLines(text, color) {
  text.split('\n').forEach(line => console.log(color('  ' + line)));
}

async function pause() {
  await inquirer.prompt([{
    type: 'input',
    name: 'next',
    message: chalk.gray('Press ENTER to continue...')
  }]);
}

async function browseEvidence(path) {
  let idx = 0;
  while (true) {
    console.log();
    console.log(chalk.cyan.bold(`  ${path.label}: ${path.description}`));
    console.log(chalk.gray(`  [ Evidence ${idx + 1} of ${path.evidence.length} ]`));
    hr();
    console.log();
    printLines(path.evidence[idx], chalk.white);
    console.log();
    hr();
    console.log();

    const choices = [];
    if (idx < path.evidence.length - 1) {
      choices.push({ name: chalk.white('See next evidence'), value: 'next' });
    }
    choices.push({ name: chalk.white('Back to case file'), value: 'back' });

    const { nav } = await inquirer.prompt([{
      type: 'list',
      name: 'nav',
      message: chalk.yellow('What would you like to do?'),
      choices
    }]);

    if (nav === 'next') {
      idx++;
    } else {
      break;
    }
  }
}

async function runCase(caseData, number) {
  console.clear();
  console.log(chalk.gray(`\n  CASE ${number} OF ${cases.length}`));
  console.log(chalk.red(caseData.ascii));
  console.log();
  hr();
  console.log(chalk.white.bold('\n  CASE FILE\n'));
  printLines(caseData.narrative, chalk.white);
  console.log();
  hr();
  console.log();

  const visited = new Set();

  while (true) {
    const pathChoices = caseData.paths.map(p => ({
      name: (visited.has(p.id)
        ? chalk.green('  [reviewed] ')
        : chalk.gray('             ')) +
        chalk.cyan(p.label) + chalk.white(': ' + p.description),
      value: p.id
    }));

    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: chalk.yellow('Case file — choose an investigation path or submit your diagnosis:'),
      choices: [
        ...pathChoices,
        new inquirer.Separator(chalk.gray('  ' + '─'.repeat(54))),
        { name: chalk.yellow('>> Submit my diagnosis'), value: 'diagnose' }
      ]
    }]);

    if (action === 'diagnose') {
      if (visited.size === 0) {
        console.log(chalk.red('\n  Examine at least one path before submitting a diagnosis.\n'));
        continue;
      }

      console.log();
      hr();
      console.log();

      const { diagnosis } = await inquirer.prompt([{
        type: 'list',
        name: 'diagnosis',
        message: chalk.yellow('What is your diagnosis?'),
        choices: caseData.diagnoses.map(d => ({ name: d.label, value: d.id }))
      }]);

      const result = caseData.diagnoses.find(d => d.id === diagnosis);
      console.log();
      hr();

      if (result.correct) {
        score += 10;
        console.log(chalk.green(`\n  CORRECT DIAGNOSIS  +10 points`));
        console.log(chalk.green(`  Running total: ${score} / ${maxScore}\n`));
      } else {
        console.log(chalk.red(`\n  INCORRECT DIAGNOSIS  +0 points`));
        console.log(chalk.red(`  Running total: ${score} / ${maxScore}\n`));
        const correct = caseData.diagnoses.find(d => d.correct);
        console.log(chalk.yellow('  Correct diagnosis: ') + chalk.white(correct.label) + '\n');
      }

      hr();
      console.log(chalk.cyan.bold('\n  SCHOLARLY FEEDBACK\n'));
      printLines(caseData.feedback, chalk.white);
      console.log();
      hr();
      console.log();
      await pause();
      break;
    }

    visited.add(action);
    const path = caseData.paths.find(p => p.id === action);
    await browseEvidence(path);
  }
}

async function showTitle() {
  console.clear();
  console.log(chalk.red(`
  +====================================================================+
  |                                                                    |
  |  :::     ::: :::     ::::: :::  :::::::::  :::::::::  ::::::::    |
  |  :+:     :+: :+:    :+:+:+:+:+:    :+:   :+:    :+: :+:         |
  |  +:+     +:+ +:+    +:+ +:+:+ +:+  +:+    +:+    +:+  +:+        |
  |  +#+     +:+ +#+    +#+  +:+  +#+  +#+    +#++:++#+   +#++:++#+  |
  |   +#+   +#+  +#+    +#+       +#+  +#+    +#+         +#+         |
  |    #+#+#+#   #+#    #+#       #+#  #+#   #+#         #+#         |
  |      ###     ########## ######### ###    ###         ########     |
  |                                                                    |
  |             F O L K L O R E   I N V E S T I G A T O R            |
  |                                                                    |
  +====================================================================+`));

  console.log(chalk.yellow(`
  You are a forensic folklorist called to investigate three historical
  reports of vampires from 18th and 19th century Europe and America.

  Armed with the scholarship of Paul Barber and Jan Perkowski, examine
  all available evidence before rendering your diagnosis.
`));
  console.log(
    chalk.white('  Explore each investigation path freely, then submit your diagnosis.') + '\n' +
    chalk.white('  Each correct diagnosis earns ') + chalk.green('10 points') +
    chalk.white('. Maximum score: ') + chalk.green(`${maxScore}`) + chalk.white('.')
  );
  console.log();
  hr();
  console.log();
}

async function showResults() {
  console.clear();
  const pct = Math.round((score / maxScore) * 100);

  console.log(chalk.red(`
  +============================================+
  |                                            |
  |     I N V E S T I G A T I O N             |
  |           C O M P L E T E                 |
  |                                            |
  +============================================+`));

  console.log();
  console.log(
    chalk.white('  Final Score: ') +
    chalk.yellow.bold(`${score} / ${maxScore}`) +
    chalk.gray(`  (${pct}%)`)
  );
  console.log();

  if (pct === 100) {
    console.log(chalk.green.bold('  MASTER FOLKLORIST'));
    console.log(chalk.green('  Perfect analysis. You demonstrate mastery of forensic'));
    console.log(chalk.green('  folklore and taphonomic reasoning.\n'));
  } else if (pct >= 67) {
    console.log(chalk.yellow.bold('  COMPETENT INVESTIGATOR'));
    console.log(chalk.yellow('  Solid scholarly foundation. Review the cases you missed'));
    console.log(chalk.yellow('  to sharpen your diagnostic precision.\n'));
  } else if (pct >= 34) {
    console.log(chalk.magenta.bold('  APPRENTICE INVESTIGATOR'));
    console.log(chalk.magenta('  Some sound reasoning, but important gaps remain.'));
    console.log(chalk.magenta('  Consult the bibliography below.\n'));
  } else {
    console.log(chalk.red.bold('  CREDULOUS VILLAGER'));
    console.log(chalk.red('  Your diagnoses favored supernatural explanation over evidence.'));
    console.log(chalk.red('  The scholars below will set you straight.\n'));
  }

  hr();
  console.log(chalk.white.bold('\n  BIBLIOGRAPHY\n'));

  console.log(
    chalk.white('  Barber, Paul. ') +
    chalk.yellow('"Vampires, Burial, and Death: Folklore and Reality."') +
    chalk.gray('\n  Yale University Press, 1988.\n')
  );
  console.log(
    chalk.white('  Perkowski, Jan L. ') +
    chalk.yellow('"Vampires of the Slavs."') +
    chalk.gray('\n  Slavica Publishers, 1976.\n')
  );
  console.log(
    chalk.white('  Sledzik, Paul S. and Nicholas Bellantoni.\n') +
    chalk.white('  "Bioarchaeological and Biocultural Evidence for the\n') +
    chalk.white('  New England Vampire Folk Belief." ') +
    chalk.yellow('American Journal of Physical Anthropology') +
    chalk.gray(', 1994.\n')
  );
  console.log(
    chalk.yellow('  Visum et Repertum') +
    chalk.gray(' (Austrian Imperial Report on Arnold Paole), 1732.\n')
  );

  hr();
  console.log();
}

async function main() {
  await showTitle();

  await inquirer.prompt([{
    type: 'input',
    name: 'start',
    message: chalk.yellow('Press ENTER to begin your investigation...')
  }]);

  for (let i = 0; i < cases.length; i++) {
    await runCase(cases[i], i + 1);
  }

  await showResults();
}

main().catch(err => {
  console.error(chalk.red('\nError: ' + err.message));
  process.exit(1);
});
