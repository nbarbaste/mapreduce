function map(text)
{
	var output = [];
	
	var tmp = text.split("\n");
	
	for(i=0;i<tmp.length;i++)
	{
		tmp[i] = tmp[i].split(" ");
	}
	
	for(i=0;i<tmp.length;i++)
	{
		if(tmp[i]!="")
		{
			output = output.concat(tmp[i]);
		}
	}
	output = output.filter(String);
	
	for(i=0;i<output.length;i++)
	{
		output[i] = output[i].toLowerCase();
	}
	output.sort();
	
	return output;
}

function reduce(array)
{
	var output = [];
	var wordNumber=0;

	for(i=0;i<array.length;i++)
	{
		if(output.indexOf(array[i])>=0)
		{
			output[(2*wordNumber)-1] = output[(2*wordNumber)-1]+1;
		}
		else
		{
			output.push(array[i]);
			output.push(1);
			wordNumber++;
		}
	}
	
	return output;
}

function mapReduce()
{
	var input = document.getElementById("input");
	var result = document.getElementById("result");
	
	var tmp = reduce(map(input.value));
	
	var tmp2 = "";
	
	for(i=0; i<tmp.length;i++)
	{
		tmp2 += tmp[i].toString();
		
		if((i%2==0) && (i != tmp.length))
		{
			tmp2 += " : ";
		}
		else
		{
			tmp2 += "\n";
		}	
	}
	
	result.value = tmp2;
}
