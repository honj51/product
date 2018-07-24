package com.af.test.paths;

import com.aote.test.TestRoot;

public class PathDemoTest extends TestRoot {
	public void testOne(){
		String result = path("demo", "{data:{}}");
		System.out.println(result);
	}
}
