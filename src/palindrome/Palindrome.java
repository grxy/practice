package palindrome;

public class Palindrome {

	public static void main(String[] args) {
		System.out.println(Palindrome.isPalindrome("racecar"));
		System.out.println(Palindrome.isPalindrome("raceca"));
		System.out.println(Palindrome.isPalindrome(null));
		System.out.println(Palindrome.isPalindrome(1234));
	}

	public static boolean isPalindrome(String s) {
		if (s == null) {
			return false;
		}

		char[] input = s.toCharArray();
		int len = input.length;

		if (len == 0) {
			return false;
		}

		for (int i = 0; i < len / 2; i++) {
			if (input[i] != input[len - i - 1]) {
				return false;
			}
		}

		return true;
	}
}
