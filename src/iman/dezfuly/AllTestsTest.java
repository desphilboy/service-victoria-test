package iman.dezfuly;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Arrays;
import java.util.LinkedList;

class AllTestsTest {

	@Test
	@DisplayName("creates the Josephus sequence 9,5 correctly.")
	void test95() {
		List<Integer> expect = new LinkedList<Integer>(Arrays.asList(5, 1, 7, 4, 3, 6, 9, 2, 8));
		List<Integer> results = Josephus.josephus(9, 5);
		assertEquals(results, expect);
	}

	@Test
	@DisplayName("creates the Josephus sequence 8,3 correctly.")
	void test83() {
		List<Integer> expect = new LinkedList<Integer>(Arrays.asList(3, 6, 1, 5, 2, 8, 4, 7));
		List<Integer> results = Josephus.josephus(8, 3);
		assertEquals(results, expect);
	}

	@Test
	@DisplayName("creates the Josephus sequence 9,4 correctly.")
	void test94() {
		List<Integer> expect = new LinkedList<Integer>(Arrays.asList(4, 8, 3, 9, 6, 5, 7, 2, 1));
		List<Integer> results = Josephus.josephus(9, 4);
		assertEquals(results, expect);
	}
}
