package pramp;

public class LoveLetter {
    public static boolean isReproducible(String letter, String newspaper) {
        if (letter.length() > newspaper.length()) {
            return false;
        }

        int[] chars = new int[256];
        int count = 0;

        for (char c : letter.toCharArray()) {
            chars[(int) c]++;
            count++;
        }

        for (char c : newspaper.toCharArray()) {
            int i = (int) c;

            if (chars[i] > 0) {
                chars[i]--;
                count--;
            }

            if (count == 0) {
                return true;
            }
        }

        return false;
    }

    public static void main (String[] args) {
        System.out.println("hello");

        System.out.print("isReproducible: " + LoveLetter.isReproducible("TEST", "AETS"));
    }
}
