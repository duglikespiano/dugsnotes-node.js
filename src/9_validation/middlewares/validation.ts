import { Request, Response, NextFunction } from 'express';
import { idRegex, passwordRegex } from '../functions/regex';

export const validateAccount = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id, password } = req.body;
		const resultObject = {
			idCheckResult: true,
			passwordCheckResult: true,
		};
		let resultTextId = '';
		let resultTextPassword = '';
		let resultText = '';
		let invalidElementsCount = 0;

		if (!idRegex.test(id)) {
			resultObject.idCheckResult = false;
			resultTextId = 'INVALID ID';
		} else {
			resultTextId = 'VALID ID';
		}

		if (!passwordRegex.test(password)) {
			resultObject.passwordCheckResult = false;
			resultTextPassword = 'INVALID PASSWORD';
		} else {
			resultTextPassword = 'VALID PASSWORD';
		}

		resultText = `${resultTextId} & ${resultTextPassword}`;

		Object.values(resultObject).forEach((item) => {
			if (!item) {
				invalidElementsCount++;
			}
		});

		if (invalidElementsCount === 0) {
			resultText = 'PROPER INPUTS';
		}

		req.app.locals.validationResult = resultText;
		next();
	} catch (error) {
		console.error(error);
	}
};
