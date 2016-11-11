package sort;

public class MergeSort implements SortInterface {
	public Comparable[] sort(Comparable[] list) {
		int len = list.length;

		if (len <= 1) {
			return list;
		}

		Comparable[] first = new Comparable[len / 2];
		Comparable[] second = new Comparable[len - first.length];

		System.arraycopy(list, 0, first, 0, first.length);
		System.arraycopy(list, first.length, second, 0, second.length);

		sort(first);
		sort(second);

		merge(first, second, list);

		return list;
	}

	private void merge(Comparable[] first, Comparable[] second, Comparable[] result) {
		// index in first
		int i1 = 0;

		// index in second
		int i2 = 0;

		// index in result
		int i3 = 0;

		while (i1 < first.length && i2 < second.length) {
			if (first[i1].compareTo(second[i2]) < 0) {
				result[i3] = first[i1];
				i1++;
			} else {
				result[i3] = second[i2];
				i2++;
			}

			i3++;
		}

		System.arraycopy(first, i1, result, i3, first.length - i1);
		System.arraycopy(second, i2, result, i3, second.length - i2);
	}
}
