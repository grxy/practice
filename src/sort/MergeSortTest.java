package sort;

import static org.junit.Assert.*;

import org.junit.Test;

public class MergeSortTest {
	private MergeSort sut = new MergeSort();

	@Test
	public void testSortIntArray() {
		Comparable[] input = {5, 4, 3, 2, 1};
		Comparable[] output = {1, 2, 3, 4, 5};

		assertArrayEquals(output, sut.sort(input));
	}

	@Test
	public void testSortStringArray() {
		Comparable[] input = {"Hello", "There", "Andrew"};
		Comparable[] output = {"Andrew", "Hello", "There"};

		assertArrayEquals(output, sut.sort(input));
	}
}
