package com.utils.regExUtils {
	/**
	 * @author larlii
	 */
	public class RegExUtils {
		public function trim(str : String) : String {
			return str.replace(/^\s+|\s+$/g, '');
		}

		public function trimAllWhiteSpaces(str : String) : String {
			return str.replace(/\s/g, "");
		}

		public function isFirstCharacterNumber(str : String) : Boolean {
			var myRegExp : RegExp = /(\d+)/;
			var matchPos1 : int = str.search(myRegExp);

			return (matchPos1 == 0) ? true : false;
		}

		// Return position of first occurrence of any number
		public function getPositionOfFirstInt(str : String) : int {
			var myRegExp : RegExp = /(\d+)/;
			var matchPos1 : int = str.search(myRegExp);

			return matchPos1;
		}

		// Return position of last occurrence of any number
		public function getPositionOfLastInt(str : String) : int {
			var myRegExp : RegExp = /(\d)(?!.*(\d))/;
			var matchPos1 : int = str.search(myRegExp);

			return matchPos1;
		}

		// Return position of first occurrence of any string
		public function getPositionOfString(str : String, match : String) : int {
			var matchPos1 : int = str.search(match);

			return matchPos1;
		}

		// Return position of first occurrence of any char
		public function getPositionOfFirstChar(str : String) : int {
			var myRegExp : RegExp = /(\D+)/;
			var matchPos1 : int = str.search(myRegExp);

			return matchPos1;
		}

		// Return position of last occurrence of any char
		public function getPositionOfLastChar(str : String) : int {
			var myRegExp : RegExp = /(\D)(?!.*(\D))/;
			var matchPos1 : int = str.search(myRegExp);

			return matchPos1;
		}

		// Return true/false if URL is valid/not valid
		public function isUrlValid(str : String) : Boolean {
			var regExp : RegExp = /^http(s)?:\/\/((\d+\.\d+\.\d+\.\d+)|(([\w-]+\.)+([a-z,A-Z][\w-]*)))(:[1-9][0-9]*)?(\/([\w-.\/:%+@&=]+[\w- .\/?:%+@&=]*)?)?(#(.*))?$/i;

			return regExp.test(str);
		}

		// Return true/false if EMAIL is valid/not valid
		public function isEmailValid(str : String) : Boolean {
			var regExp : RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;

			return regExp.test(str);
		}
		
		// Is string lowercase
		public function isLowerCase(str : String) : Boolean {
			var regExp : RegExp = /^([a-z])*$/;

			return regExp.test(str);
		}
		
		// Is string uppercase
		public function isUpperCase(str : String) : Boolean {
			var regExp : RegExp = /^([A-Z])*$/;

			return regExp.test(str);
		}
		
		// Is string uppercase
		public function isNumber(str : String) : Boolean {
			var regExp : RegExp = /^\d*\.?\d*$/;

			return regExp.test(str);
		}
		
		// formats DD/MM/YY or DD/MM/YYYY or MM/DD/YY or MM/DD/YYYY
		public function isDateFormatValid(str : String) : Boolean {
			var regExp : RegExp = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|(19|20)\d{2})$/;

			return regExp.test(str);
		}
	}
}