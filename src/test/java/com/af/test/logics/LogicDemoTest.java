package com.af.test.logics;

import com.aote.test.TestRoot;

public class LogicDemoTest extends TestRoot {
	public void testOne(){
		String result = logic("demo", "{data:{a:5}}");
		System.out.println(result);
	}
}
