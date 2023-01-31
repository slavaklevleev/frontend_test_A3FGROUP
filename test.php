<?php

class Parser
{
    private $url;

    public function __construct($url)
    {
        $this->url = $url;
        $this->get_content();
    }

    protected function get_content()
    {
        $page = file_get_contents($this->url);
        $this->get_tags_count($page);
    }

    private function get_tags_count($page)
    {
        preg_match_all('/<\/[^>]*>/m', $page, $match);
        $result = [];

        foreach ($match[0] as $key => $value) {
            if (isset($result[$value])) {
                $result[$value] += 1;
            } else {
                $result[$value] = 1;
            }
        }

        foreach ($result as $key => $value) {
            echo $key . ' ' . $value . "\n";
        }
    }


    public function __destruct()
    {
        echo "Подсчет окончен";
    }
}

$pars = new Parser("https://a3f.ru");
