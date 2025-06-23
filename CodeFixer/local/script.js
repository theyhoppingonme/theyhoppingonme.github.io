     const container = document.querySelector('.container');

	if (container) {
	  const backCirclesDiv = document.createElement('div');
  	backCirclesDiv.className = 'backcircles';

 	 const ul = document.createElement('ul');
	  for (let i = 0; i < 10; i++) {
 	   const li = document.createElement('li');
 	   ul.appendChild(li);
 	 }

 	 backCirclesDiv.appendChild(ul);
 	 container.appendChild(backCirclesDiv);
	}

    const inputCode = document.getElementById('inputCode');
    const highlightedCode = document.getElementById('highlightedCode');
    const errorOutput = document.getElementById('errorOutput');

    inputCode.addEventListener('input', () => {
      const input = inputCode.value;
      let result = '';
      let i = 0;
      const len = input.length;
      errorOutput.textContent = '';

      while (i < len) {
        let char = input[i];

        if (char === '"' || char === "'") {
          const quoteType = char;
          let str = char;
          i++;
          let escaped = false;

          while (i < len) {
            const current = input[i];
            str += current;

            if (current === '\\') {
              escaped = !escaped;
            } else if (current === quoteType && !escaped) {
              break;
            } else {
              escaped = false;
            }

            i++;
          }

          if (quoteType === '"') {
            try {
              const contextCheck = str.includes("'");
              if (!contextCheck) {
                const newStr = "'" + str.slice(1, -1).replace(/'/g, "\\'") + "'";
                new Function("return " + newStr);
                result += newStr;
              } else {
                result += str;
              }
            } catch {
              result += str;
            }
          } else {
            result += str;
          }

          i++;
          continue;
        }

        result += char;
        i++;
      }

      highlightedCode.textContent = result;
      Prism.highlightElement(highlightedCode);
    });
  